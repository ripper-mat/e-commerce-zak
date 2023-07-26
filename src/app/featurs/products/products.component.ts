import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any[] | undefined;

  constructor(private myService: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.myService.getAllProducts().subscribe(
      (data) => {
        this.products = data;
        console.log(data)
      },
      (error) => {
        console.error('Si è verificato un errore:', error);
      }
    );
  }
}
