import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesComponent} from './pages.component';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {SidenavListComponent} from './components/sidenav-list/sidenav-list.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from "../../material/material.module";
import {CheckAuthAccessGuard} from '../../auth-guard/check-auth-access.guard';
import {PipesModule} from '../../shared/pipes/pipes.module';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'vendors',
        loadChildren: () => import('./vendors/vendors.module').then(m => m.VendorsModule),
        canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'customization',
        loadChildren: () => import('./customization/customization.module').then(m => m.CustomizationModule),
        canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'my-profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
        canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'admin-control',
        loadChildren: () => import('./admin-control/admin-control.module').then(m => m.AdminControlModule),
        canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
        canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'catalog',
        loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule),
        canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'gallery',
        loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule),
        canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'sales',
        loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule),
        canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule),
        canActivate: [CheckAuthAccessGuard],
        data: {preload: false, delay: false}
      },
      {
        path: 'offers',
        loadChildren: () => import('./offers/offers.module').then(m => m.OffersModule),
        canActivate: [CheckAuthAccessGuard]
      },
      // Contact Us
      {
        path: 'contact-us',
        loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule),
        canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'additional-pages',
        loadChildren: () => import('./additional-pages/additional-pages.module').then(m => m.AdditionalPagesModule),
        canActivate: [CheckAuthAccessGuard],
        data: {preload: true, delay: false}
      },
      {
        path: 'blogs',
        loadChildren: () => import('./blog-area/blog-area.module').then(m => m.BlogAreaModule),
        canActivate: [CheckAuthAccessGuard],
        data: {preload: true, delay: false}
      },
      {
        path: 'review',
        loadChildren: () => import('./reviews/reviews.module').then(m => m.ReviewsModule),
        canActivate: [CheckAuthAccessGuard]
      },
    ]
  },
];

@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent,
    SidenavListComponent,
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        FlexLayoutModule,
        PipesModule,
    ],
  exports: [],
  providers: [CheckAuthAccessGuard]
})
export class PagesModule {
}
