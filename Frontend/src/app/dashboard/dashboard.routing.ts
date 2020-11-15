import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AddProductComponent } from './dashboard-components/add-product/add-product.component';

export const DashboardRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'add-product', component: AddProductComponent }
];
