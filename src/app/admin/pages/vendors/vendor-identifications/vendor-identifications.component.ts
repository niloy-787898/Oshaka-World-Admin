import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {NgxSpinnerService} from 'ngx-spinner';
import {ReloadService} from "../../../../services/core/reload.service";
import {Vendor} from "../../../../interfaces/common/vendor";
import {OrderService} from "../../../../services/common/order.service";
import {VendorDataService} from "../../../../services/common/vendor-data.service";
import {OrderStatus} from "../../../../enum/order.enum";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-vendor-identifications',
  templateUrl: './vendor-identifications.component.html',
  styleUrls: ['./vendor-identifications.component.scss']
})
export class VendorIdentificationsComponent implements OnInit {
  private subAcRoute: Subscription;

  public orderEnum = OrderStatus;

  //Vendor
  vendorId: string = null;
  vendor: Vendor = null;
  //vendor Identification
  vendorIdentification;
  constructor(
    private orderService: OrderService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private vendorDataService: VendorDataService,
    private reloadService:ReloadService,
  ) {
  }

  ngOnInit(): void {
    // this.subAcRoute = this.activatedRoute.queryParams.subscribe(qParam => {
    //   if (qParam && qParam.page) {
    //     this.currentPage = qParam.page;
    //   } else {
    //     this.currentPage = 1;
    //   }
    //   this.getAllTransactionByAdmin();
    // });
    this.subAcRoute = this.activatedRoute.paramMap.subscribe(param => {
      this.vendorId = param.get('id');
      // console.log(this.vendorId)
      this.getVendorById();
    });

  }

  /*
  * HTTP Request Handler
  */

  private getVendorById() {
    this.vendorDataService.getSingleVendorById(this.vendorId)
      .subscribe( res => {
        // console.log(res.data)
        this.vendor = res.data;
        this.vendorIdentification=this.vendor.vendorIdentification;
        this.reloadService.needRefreshVendors$;
      }, err => {
        console.log(err);
      });
  }

  deleteVendorIdentificationInfo(id){
    // console.log(id);

  }

  openInfoDialog(){

  }

  openImageInNewTab(url){
    // console.log(url);
    window.open(url,'_blank');
  }



  /**
   * PAGINATION CHANGE
   */
  public onPageChanged(event: any) {
    this.router.navigate([], {queryParams: {page: event}});
  }


  /**
   * ON DESTROY
   */
  ngOnDestroy() {
    if (this.subAcRoute) {
      this.subAcRoute.unsubscribe();
    }
  }


}
