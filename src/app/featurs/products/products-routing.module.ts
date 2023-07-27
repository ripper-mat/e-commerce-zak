import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ListaProductComponent } from './components/lista-product/lista-product.component';
import { AddProdottoComponent } from './components/add-prodotto/add-prodotto.component';
import { UpdateProductsComponent } from './components/update-products/update-products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent,
    children: [
       {path: '', component: ListaProductComponent},
       {path: 'new', component: AddProdottoComponent },
       {path: 'update', component: UpdateProductsComponent },
    ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
