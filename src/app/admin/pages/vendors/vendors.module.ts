import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {VendorsRoutingModule} from './vendors-routing.module';
import {VendorsComponent} from './vendors.component';
import {UpdateAmountComponent} from './update-amount/update-amount.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../../material/material.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {SharedModule} from '../../../shared/shared.module';
import {PipesModule} from '../../../shared/pipes/pipes.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';
import {VendorDetailsComponent} from './vendor-details/vendor-details.component';
import {EditVendorComponent} from './edit-vendor/edit-vendor.component';
import { VendorIdentificationsComponent } from './vendor-identifications/vendor-identifications.component';

@NgModule({
  declarations: [
    VendorsComponent,
    UpdateAmountComponent,
    VendorDetailsComponent,
    EditVendorComponent,
    VendorIdentificationsComponent
  ],
  imports: [
    CommonModule,
    VendorsRoutingModule,
    MaterialModule,
    FormsModule,
    NgxPaginationModule,
    SharedModule,
    PipesModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatTooltipModule
  ]
})
export class VendorsModule { }
