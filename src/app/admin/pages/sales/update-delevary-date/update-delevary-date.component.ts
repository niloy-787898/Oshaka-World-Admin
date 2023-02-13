import {Component, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {UiService} from '../../../../services/core/ui.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Select} from '../../../../interfaces/core/select';
import {ORDER_STATUS} from '../../../../core/utils/app-data';
import {OrderStatus} from '../../../../enum/order.enum';
import {Order} from '../../../../interfaces/common/order.interface';

@Component({
  selector: 'app-update-delevary-date',
  templateUrl: './update-delevary-date.component.html',
  styleUrls: ['./update-delevary-date.component.scss']
})
export class UpdateDelevaryDateComponent implements OnInit, OnDestroy {

  // Form Template Ref
  @ViewChild('templateForm') templateForm: NgForm;

  dataForm?: FormGroup;
  private sub: Subscription;

  isLoading = false;

  // Store Data from param
  order: Order = null;

  today = new Date();

  constructor(
    private fb: FormBuilder,
    private uiService: UiService,
    public dialogRef: MatDialogRef<UpdateDelevaryDateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Order
  ) {
  }

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      deliveringDateAdmin: [null],
    });

    if (this.data) {
      this.order = this.data;
      this.dataForm.patchValue(this.order);
    }
  }
  onSubmit() {
    if (this.dataForm.invalid) {
      this.uiService.warn('Please complete all the required fields');
      return;
    }


    this.onCloseDialog(this.dataForm.value);
    console.log('this.dataForm.value', this.dataForm.value)
  }

  /**
   * ON CLOSE DIALOG
   */
  onCloseDialog(data: any) {
    this.dialogRef.close({data: data});
  }


  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
