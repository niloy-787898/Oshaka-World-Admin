import { Injectable } from '@angular/core';
import {DATABASE_KEY} from "../../core/utils/global-variable";
import {AdminRoleData} from "../../interfaces/admin/admin-role-data";


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  /**
   * SESSION STORAGE
   */
  storeAdminRole(data: AdminRoleData) {
    sessionStorage.setItem(DATABASE_KEY.adminRoleData, JSON.stringify(data));
  }

  get adminRole(): AdminRoleData {
    const data = sessionStorage.getItem(DATABASE_KEY.adminRoleData);
    return JSON.parse(data) as AdminRoleData;
  }


  storeProductInputData(data: any) {
    sessionStorage.setItem(DATABASE_KEY.productFormData, JSON.stringify(data));
  }

  get storedProductInput(): any {
    const data = sessionStorage.getItem(DATABASE_KEY.productFormData);
    return JSON.parse(data);
  }

  storeCouponData(data: any) {
    sessionStorage.setItem(DATABASE_KEY.userCoupon, JSON.stringify(data));
  }

  get storedCouponData(): any {
    const data = sessionStorage.getItem(DATABASE_KEY.userCoupon);
    return JSON.parse(data);
  }

  /**
   * DYNAMIC SESSION DATA
   */
  storeInputData(data: any, key: string) {
    sessionStorage.setItem(key, JSON.stringify(data));
  }

  getStoredInput(key: string): any {
    const data = sessionStorage.getItem(key);
    return JSON.parse(data);
  }

  removeSessionData(key: string) {
    sessionStorage.removeItem(key);
  }



  /**
   * LOCAL STORAGE
   */
  storeAdminRoleToLocal(data: AdminRoleData) {
    localStorage.setItem(DATABASE_KEY.adminRoleData, JSON.stringify(data));
  }

  get adminRoleFromLocal(): AdminRoleData {
    const data = localStorage.getItem(DATABASE_KEY.adminRoleData);
    return JSON.parse(data) as AdminRoleData;
  }



}
