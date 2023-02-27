import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { VendorsComponent } from "./vendors.component";
import {EditVendorComponent} from './edit-vendor/edit-vendor.component';

import { VendorIdentificationsComponent } from './vendor-identifications/vendor-identifications.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  {path: '', component: VendorsComponent},
  {path: 'vendor-details/:id', component: VendorDetailsComponent},
  {path: 'edit-vendor/:id', component: EditVendorComponent},
  {path: 'vendor-identifications/:id', component: VendorIdentificationsComponent},
  {path: 'transactions/:id', component: TransactionsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorsRoutingModule { }
