import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ShippingChargeComponent } from './shipping-charge/shipping-charge.component';
import { AllOrdersInvComponent } from './all-orders-inv/all-orders-inv.component';
import {CancelOrdersComponent} from "./cancel-orders/cancel-orders.component";

const routes: Routes = [
  { path: '', redirectTo: 'all-orders' },
  { path: 'all-orders', component: AllOrdersComponent },
  { path: 'add-order', component: AddOrderComponent },
  { path: 'transaction', component: TransactionsComponent },
  { path: 'edit-order/:id', component: AddOrderComponent },
  { path: 'order-details/:id', component: OrderDetailsComponent },
  { path: 'shipping-charge', component: ShippingChargeComponent },
  { path: 'search-by-invoice', component: AllOrdersInvComponent },
  { path: 'cancel-orders', component: CancelOrdersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesRoutingModule {}
