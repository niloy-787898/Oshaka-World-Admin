import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Vendor} from "../../interfaces/common/vendor";
import {environment} from "../../../environments/environment";
import { FilterData } from 'src/app/interfaces/core/filter-data';

const API_VENDOR = environment.apiBaseLink + '/api/vendor/';


@Injectable({
  providedIn: 'root'
})
export class VendorDataService {

  constructor(
    private httpClient: HttpClient
  ) {
  }
  getAllVendors(filterData: FilterData, searchQuery?: string) {
    let params = new HttpParams();
    if (searchQuery) {
      params = params.append('q', searchQuery);
    }
    return this.httpClient.post<{ data: Vendor[], count: number, success: boolean }>(API_VENDOR + 'get-all', filterData, {params});
  }

  getLoginVendorInfo() {
    return this.httpClient.get<{ data: Vendor, message: string }>(API_VENDOR + 'get-logged-in-vendor-data');
  }

  getSingleVendorById(id: string) {
    return this.httpClient.get<{ data: Vendor, message: string }>(API_VENDOR  + id);
  }

  getSingleVendorBySlug(slug: string) {
    return this.httpClient.get<{ data: Vendor, message: string }>(API_VENDOR + 'get-single-vendor-by-slug/' + slug);
  }

  editVendor(userId: string, data: Vendor) {
    return this.httpClient.put<{ message: string }>(API_VENDOR + 'edit-vendor-info/' + userId, data);
  }

  changeVendorStatus(id: string, data: any) {
    return this.httpClient.put<{ message: string }>(API_VENDOR + 'update-data/' + id, data);
  }

  editVendorOwnProfileInfo(data: Vendor) {
    return this.httpClient.put<{ message: string }>(API_VENDOR + 'edit-logged-in-vendor-info', data);
  }

  changeVendorOwnPassword(data: { oldPassword: string, newPassword: string }) {
    return this.httpClient.put<{ message: string }>(API_VENDOR + 'change-logged-in-vendor-password', data);
  }

  // router.put('/change-logged-in-admin-password', checkAdminAuth, controller.changeAdminOwnPassword);


  deleteVendor(userId: string) {
    return this.httpClient.delete<{ message: string }>(API_VENDOR + 'delete-vendor-by-id/' + userId);
  }

  getDashboardData() {
    return this.httpClient.get<{ data: any, message: string }>(API_VENDOR + 'get-dashboard-data');
  }

  editVendorByAdmin(data: Vendor) {
    return this.httpClient.put<{message?: string}>(API_VENDOR + 'edit-vendor-info-by-admin', data);
  }

}
