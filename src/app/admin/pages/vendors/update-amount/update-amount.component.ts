import {Component, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {Subscription} from 'rxjs';
import {UiService} from "../../../../services/core/ui.service";
import {Select} from "../../../../interfaces/core/select";
import {UtilsService} from "../../../../services/core/utils.service";
import {Vendor} from "../../../../interfaces/common/vendor";
import {ReloadService} from "../../../../services/core/reload.service";
import {StorageService} from "../../../../services/common/storage.service";
import {VendorPaymentService} from "../../../../services/common/vendor-payment.service";


@Component({
  selector: 'app-update-amount',
  templateUrl: './update-amount.component.html',
  styleUrls: ['./update-amount.component.scss']
})
export class UpdateAmountComponent implements OnInit, OnDestroy {

  private subValueChange: Subscription;

  // Form Template Ref
  @ViewChild('templateForm') templateForm: NgForm;

  dataForm?: FormGroup;
  isLoading = false;

  paymentStatus: Select[] = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
  ];

  constructor(
    public dialogRef: MatDialogRef<UpdateAmountComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Vendor,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private uiService: UiService,
    private utilsService: UtilsService,
    private storageService: StorageService,
    private spinner: NgxSpinnerService,
    private reloadService: ReloadService,
    private vendorPaymentService: VendorPaymentService
  ) { }

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      _id: [null],
      totalAmount: [null],
      dueAmount: [null],
      receivedAmount: [null],
      currentPayment: [null, Validators.required],
      paymentMethod: [null, Validators.required],
      paymentMethodId: [null, Validators.required]
    });
    this.setFormValue(this.data);
  }

  /**
   * SET DATA
   */

  private setFormValue(data: any) {
    this.dataForm.patchValue(data);
  }

  onSubmit() {

    if (this.dataForm.invalid) {
      this.uiService.warn('Please complete all the required fields');
      return;
    }

    // Submit Logic
    const paymentMethod = this.dataForm.value.paymentMethod;
    const paymentMethodId = this.dataForm.value.paymentMethodId;
    const totalAmount = this.dataForm.value.totalAmount;
    let dueAmount = this.dataForm.value.dueAmount;
    let receivedAmount = this.dataForm.value.receivedAmount;
    let currentPayment = this.dataForm.value.currentPayment;

    receivedAmount = receivedAmount + currentPayment;
    dueAmount = dueAmount - currentPayment;

    const vendorData = {
      totalAmount,
      receivedAmount,
      dueAmount
    }

    const paymentData = {
      vendor: this.data._id,
      date: new Date,
      dateString: this.utilsService.getDateString(new Date),
      amount: currentPayment,
      paymentMethod: paymentMethod,
      paymentMethodId: paymentMethodId,
      paymentBy: null,
      status: 'pending'
    }

    this.makeVendorPayment({vendorData, paymentData});

  }

  /**
   * HTTP REQ HANDLE
   */

  private makeVendorPayment(data: any) {
    console.log(data);
    this.vendorPaymentService.makeVendorPayment(data)
      .subscribe(res => {
        this.uiService.success(res.message);
        // if (res.success) {
        // } else {
        // }
      }, error => {
        console.log(error);
      });
  }

  ngOnDestroy() {
    if (this.subValueChange) {
      this.subValueChange.unsubscribe();
    }
  }

}
