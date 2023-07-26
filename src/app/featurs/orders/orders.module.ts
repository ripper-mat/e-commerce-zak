import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { OrderService } from 'src/app/services/orders/order.service';



@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    HttpClientModule
  ],
  providers: [
    OrderService // Fornisci il servizio a livello di modulo
  ]
})
export class OrdersModule { }
