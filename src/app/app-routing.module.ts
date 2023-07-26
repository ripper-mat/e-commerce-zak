import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './featurs/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },

  {
    path: 'customers',
    loadChildren: () =>
      import('./featurs/customers/customers.module').then(
        (m) => m.CustomersModule
      ),
  },

  {
    path: 'orders',
    loadChildren: () =>
      import('./featurs/orders/orders.module').then((m) => m.OrdersModule),
  },

  {
    path: 'products',
    loadChildren: () =>
      import('./featurs/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
