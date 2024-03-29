import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {FooterData} from "../../interfaces/common/footer-data.interface";


const API_FOOTER_DATA = environment.apiBaseLink + '/api/footer-data';

@Injectable({
  providedIn: 'root'
})
export class FooterDataService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  /**
   * FooterData
   */

  addFooterData(data: FooterData) {

    console.log(data);
    return this.httpClient.post<{ message: string }>(API_FOOTER_DATA + '/add-footer-data', data);

  }

  getFooterData() {
    return this.httpClient.get<{ data: FooterData, message?: string }>(API_FOOTER_DATA + '/get-all-footer-data');
  }

  updateFooterData(id:string,data: FooterData) {
    return this.httpClient.put<{ message: string }>(API_FOOTER_DATA + '/update-footer-data/'+id, data);
  }


}
