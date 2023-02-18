import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {VendorDataService} from "../../../../services/common/vendor-data.service";
import {VendorPayment} from "../../../../interfaces/common/vendor-payment";
import {Vendor} from "../../../../interfaces/common/vendor";
import {VendorService} from "../../../../services/common/vendor.service";


@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.scss']
})
export class VendorDetailsComponent implements OnInit {

  vendorId: string = null;
  vendor: Vendor = null;
  payments: VendorPayment[] = [];

  constructor(
    private route: ActivatedRoute,
    private vendorService: VendorService,
    private vendorDataService: VendorDataService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.vendorId = param.get('id');
      this.getOrderDetails();
    });
  }

  /**
   * HTTP REQ HANDLE
   */

   private getOrderDetails() {
    this.vendorDataService.getSingleVendorById(this.vendorId)
      .subscribe(res => {
        this.vendor = res.data;
        this.payments = this.vendor.payments as VendorPayment[];
        console.log(this.vendor);
      }, error => {
        console.log(error);
      });
  }

}
