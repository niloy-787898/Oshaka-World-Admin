import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReloadService {

  private refreshAdmin = new Subject<void>();
  private refreshUser = new Subject<void>();
  private refreshProduct = new Subject<void>();
  private refreshVendors = new Subject<void>();
  private refreshVendorIdentification = new Subject<void>();
  private refreshData = new Subject<void>();

  /**
   * REFRESH GLOBAL DATA
   */
  get refreshData$() {
    return this.refreshData;
  }
  needRefreshData$() {
    this.refreshData.next();
  }



  /**
   * VendorIdentification
   */

  get refreshVendorIdentification$() {
    return this.refreshVendorIdentification;
  }

  needRefreshVendorIdentification$() {
    this.refreshVendorIdentification.next();
  }

  /**
   * VENDOR
   */

  get refreshVendors$() {
    return this.refreshVendors;
  }

  needRefreshVendors$() {
    this.refreshVendors.next();
  }

  /**
   * USER
   */
  get refreshProduct$() {
    return this.refreshProduct;
  }

  needRefreshUser$() {
    this.refreshUser.next();
  }


  /**
   * REFRESH ADMIN DATA
   */

  get refreshAdmin$() {
    return this.refreshAdmin;
  }
  needRefreshAdmin$() {
    this.refreshAdmin.next();
  }

}
