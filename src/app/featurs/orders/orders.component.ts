import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/orders/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: any[] | undefined;


  constructor(private myService: OrderService) { }

  ngOnInit(): void {
    this.getAllOrders();
  }


  getAllOrders(): void {
    this.myService.getAllOrders().subscribe(
      (data) => {
        this.orders = data;
        console.log(data)
      },
      (error) => {
        console.error('Si è verificato un errore:', error);
      }
    );
  }
}
