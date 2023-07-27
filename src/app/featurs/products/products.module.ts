import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductService } from 'src/app/featurs/products/services/product.service';
import { UpdateProductsComponent } from './components/update-products/update-products.component';
import { ListaProductComponent } from './components/lista-product/lista-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AddProdottoComponent } from './components/add-prodotto/add-prodotto.component';
import { ProductViewService } from './services/product-view.service';


@NgModule({
  declarations: [
    ProductsComponent,
    UpdateProductsComponent,
    ListaProductComponent,
    AddProdottoComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ProductService,ProductViewService // Fornisci il servizio a livello di modulo
  ]
})
export class ProductsModule { }
