import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FileFolder} from '../../../../../interfaces/gallery/file-folder.interface';
import {FileUploadService} from '../../../../../services/gallery/file-upload.service';
import {GalleryService} from '../../../../../services/gallery/gallery.service';
import {UtilsService} from '../../../../../services/core/utils.service';
import {ReloadService} from '../../../../../services/core/reload.service';
import {UiService} from '../../../../../services/core/ui.service';
import {Gallery} from '../../../../../interfaces/gallery/gallery.interface';
import {FileTypes} from '../../../../../enum/file-types.enum';
import {NgxSpinnerService} from 'ngx-spinner';


@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  // in app.component.ts
  files: File[] = [];
  folders: FileFolder[] = [];
  selectedFolder: FileFolder = null;


  constructor(
    private fileUploadService: FileUploadService,
    private galleryService: GalleryService,
    private utilsService: UtilsService,
    private reloadService: ReloadService,
    private uiService: UiService,
    private spinnerService: NgxSpinnerService,
    public dialogRef: MatDialogRef<UploadImageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FileFolder[],
  ) {
  }

  ngOnInit(): void {
    if (this.data) {
      this.folders = this.data;
    }
  }

  /**
   * IMAGE DRUG & DROP
   */
  onSelect(event: { addedFiles: any; }) {
    this.files.push(...event.addedFiles);
    // console.log(this.files);
  }

  onRemove(event: File) {
    this.files.splice(this.files.indexOf(event), 1);
  }


  /**
   * ON IMAGE UPLOAD
   */
  onUploadImages() {
    if (!this.selectedFolder) {
      this.uiService.warn('No Folder name found!');
      return;
    }
    if (!this.files || this.files.length <= 0) {
      this.uiService.warn('No Image selected!');
      return;
    }
    this.spinnerService.show();
    this.fileUploadService.uploadMultiImageOriginal(this.files)
      .subscribe(res => {
        const data: Gallery[] = res.map(m => {
          return {
            url: m.url,
            name: m.name,
            size: m.size,
            folder: this.selectedFolder,
            type: FileTypes.IMAGE
          } as Gallery;
        });
        this.addImagesToGallery(data);

      }, error => {
        this.spinnerService.hide();
        console.log(error);
      });
  }

  /**
   * HTTP REQ HANDLE
   */

  private addImagesToGallery(data: Gallery[]) {
    this.galleryService.insertManyGallery(data)
      .subscribe(res => {
        this.spinnerService.hide();
        this.reloadService.needRefreshData$();
        this.dialogRef.close();
      }, error => {
        this.spinnerService.hide();
        console.log(error);
      });
  }


}
