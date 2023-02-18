import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {Vendor} from "../../../../interfaces/common/vendor";
import {UiService} from "../../../../services/core/ui.service";
import {VendorDataService} from "../../../../services/common/vendor-data.service";
import {Select} from "../../../../interfaces/core/select";
import {StorageService} from "../../../../services/core/storage.service";


@Component({
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.component.html',
  styleUrls: ['./edit-vendor.component.scss']
})
export class EditVendorComponent implements OnInit {

  // Form Template Ref
  @ViewChild('templateForm') templateForm: NgForm;

  dataForm: FormGroup;
  private sub: Subscription;

  isLoading = false;

  // Store Data from param
  id?: string;
  vendor: Vendor;

  // Base Data
  vendorTypes: Select[] = [
    {value: 1, viewValue: 'Online'},
    {value: 2, viewValue: 'Offline'},
  ];

  areas: Select[] = [
    {value: 'Dhaka', viewValue: 'Dhaka'},
    {value: 'Rajshahi', viewValue: 'Rajshahi'},
  ];

  zones: Select[] = [
    {value: 'Mirpur', viewValue: 'Mirpur'},
    {value: 'Durgapur', viewValue: 'Durgapur'},
  ];

  paymentReceiveTypes: Select[] = [
    {value: 1, viewValue: 'Mobile Banking'},
    {value: 2, viewValue: 'Banking'},
    {value: 3, viewValue: 'Cash'},
  ];

  // Destroy Session
  needSessionDestroy = true;

  constructor(
    private fb: FormBuilder,
    private storageService: StorageService,
    private activatedRoute: ActivatedRoute,
    private vendorDataService: VendorDataService,
    private spinner: NgxSpinnerService,
    private uiService: UiService,
  ) { }

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      vendorName: [null],
      shopName: [null],
      paymentReceiveType: [null],
    });

    // IF HAVE DATA ON SESSION
    if (!this.id) {
      if (this.storageService.getStoredInput('VENDOR_INPUT')) {
        this.dataForm.patchValue(this.storageService.getStoredInput('VENDOR_INPUT'));
      }
    }

    // GET ID FORM PARAM
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = param.get('id');
      if (this.id) {
        this.getSingleVendorById();
      }
    });

  }

  onSubmit() {
    if (this.dataForm.invalid) {
      this.uiService.warn('Please complete all the required fields');
      return;
    }
    if (this.vendor) {
      const finalData = {...this.dataForm.value, ...{_id: this.vendor._id, previousPaymentType: this.vendor.paymentReceiveType}};
      this.editVendor(finalData);
    }
  }


  private editVendor(data: Vendor) {
    this.spinner.show();
    this.vendorDataService.editVendorByAdmin(data)
      .subscribe(res => {
        this.uiService.success(res.message);
        this.templateForm.resetForm();
        this.storageService.removeSessionData('VENDOR_INPUT');
        this.spinner.hide();
      }, error => {
        this.spinner.hide();
        console.log(error);
      });
  }

  private getSingleVendorById() {
    this.vendorDataService.getSingleVendorById(this.id)
      .subscribe(res => {
        if (res.data) {
          this.dataForm.patchValue(res.data);
          this.vendor = res.data;
        }
      }, error => {
        console.log(error);
      });
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    if (this.needSessionDestroy) {
      this.storageService.removeSessionData('SUB_CATEGORY_INPUT');
    }
  }
}
