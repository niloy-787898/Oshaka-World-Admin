import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {UiService} from '../../../../services/core/ui.service';
import {Router} from '@angular/router';
import {Select} from '../../../../interfaces/core/select';
import {Subscription} from 'rxjs';
import {defaultUploadImage} from '../../../../core/utils/app-data';
import {MatDialog} from '@angular/material/dialog';
import {FooterData} from "../../../../interfaces/common/footer-data.interface";
import {FooterDataService} from "../../../../services/common/footer-data.service";

@Component({
  selector: 'app-shop-information',
  templateUrl: './footer-data.component.html',
  styleUrls: ['./footer-data.component.scss']
})
export class FooterDataComponent implements OnInit, OnDestroy {

  // // Form Template Ref
  // @ViewChild('templateForm') templateForm: NgForm;

  dataForm?: FormGroup;

  socialLinksArray?: FormArray;

  footerData: FooterData;
  isLoading = false;

  // Store Data from param
  id?: string;

  // Image Picker
  pickedImage = defaultUploadImage;

  // Dummy Data
  downloadTypes: Select[] = [
    {value: 0, viewValue: 'Play Store'},
    {value: 1, viewValue: 'App Store'}
  ];

  socialTypes: Select[] = [
    {value: 0, viewValue: 'Facebook'},
    {value: 1, viewValue: 'YouTube'},
    {value: 2, viewValue: 'Twitter'},
    {value: 3, viewValue: 'Instagram'},
    {value: 4, viewValue: 'LinkedIn'}
  ];

  // Subscriptions
  private subDataOne: Subscription;
  private subDataTwo: Subscription;
  private subDataThree: Subscription;

  constructor(
    private fb: FormBuilder,
    private uiService: UiService,
    public router: Router,
    private footerdataService: FooterDataService,
    private spinner: NgxSpinnerService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {

    // INIT FORM
    this.initFormGroup();

    // GET DATA
    this.getFooterData();

  }


  /**
   * FORMS METHODS
   * initDataForm()
   * setFormValue()
   * onSubmit()
   */
  /**
   * INIT FORM
   */
  private initFormGroup() {

    this.dataForm = this.fb.group({
      shortDes: [null],
      address: [null],
      phone: [null],
      email: [null],
      aboutEsquire: [null],
      title1: [null],
      title1Des: [null],
      title2: [null],
      title2Des: [null],
      title3: [null],
      title3Des: [null],
      title4: [null],
      title4Des: [null],
      title5: [null],
      title5Des: [null],
      socialLinks: this.fb.array([]),
    });
    this.socialLinksArray = this.dataForm.get('socialLinks') as FormArray;
  }

  private setFormData() {
    this.dataForm.patchValue(this.footerData);
  }

  onSubmit() {
    if (this.dataForm.invalid) {
      this.uiService.warn('Please complete all the required fields');
      return;
    }
    console.warn(this.dataForm.value)

    if (this.footerData) {
      const finalData = {...this.dataForm.value};
      this.updateFooterData(finalData);
    } else {
      this.addFooterData(this.dataForm.value);
    }

  }

  /**
   * FORM ARRAY BUILDER
   */
  onAddNewShopObject(formControl: string) {
    const f = this.fb.group({
      type: [null],
      value: [null, Validators.required]
    });
    (this.dataForm?.get(formControl) as FormArray).push(f);
  }

  /**
   * REMOVE FORM BUILDER OBJECT
   */
  removeFormArrayField(formControl: string, index: number) {
    let formDataArray: FormArray;
    formDataArray?.removeAt(index);
  }


  /**
   * SET DATA
   */
  private setData() {

    this.footerData.socialLinks.map(m => {
      const f = this.fb.group({
        type: [m.type],
        value: [m.value, Validators.required],
      });
      (this.dataForm?.get('socialLinks') as FormArray).push(f);
    });

    this.dataForm.patchValue(this.footerData);
  }


  /**
   * HTTP REQ HANDLE
   *addShopInformation()
   * getShopInformation
   * updateShopInformationById
   */
  private addFooterData(data: any) {
    this.spinner.show();
    this.subDataOne = this.footerdataService.addFooterData(data)
      .subscribe(res => {
        this.uiService.success(res.message);
        this.spinner.hide();
      }, err => {
        this.spinner.hide();
        console.log(err);
      });
  }

  private getFooterData() {
    this.spinner.show();
    this.subDataTwo = this.footerdataService.getFooterData()
      .subscribe(res => {
        this.footerData = res.data;
        if (this.footerData) {
          this.setData();
        }
        this.spinner.hide();

      }, err => {
        this.spinner.hide();
        console.log(err);
      });
  }

  private updateFooterData(data: FooterData) {
    this.spinner.show();
    this.subDataThree = this.footerdataService.updateFooterData(this.footerData._id, data)
      .subscribe(res => {
        this.uiService.success(res.message);
        this.spinner.hide();
      }, err => {
        this.spinner.hide();
        console.log(err);
      });
  }


  ngOnDestroy() {
    if (this.subDataOne) {
      this.subDataOne.unsubscribe();
    }
    if (this.subDataTwo) {
      this.subDataTwo.unsubscribe();
    }
    if (this.subDataThree) {
      this.subDataThree.unsubscribe();
    }
  }

}
