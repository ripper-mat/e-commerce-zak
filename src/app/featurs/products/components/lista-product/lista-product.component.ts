import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductViewService } from '../../services/product-view.service';
import { Prodotto } from '../product.interface';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observer, map } from 'rxjs';

@Component({
  selector: 'app-lista-product',
  templateUrl: './lista-product.component.html',
  styleUrls: ['./lista-product.component.scss']
})
export class ListaProductComponent implements OnInit {
  products: Array<Prodotto> | undefined;
  readonly #destroyRef = inject(DestroyRef);
  readonly #httpService = inject(ProductService);
  readonly #viewService = inject(ProductViewService);
  readonly #router = inject(Router);


  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    const observer: Partial<Observer<any>> = {
      next: (data) => {
        this.products = data;
        console.log(data);
      },
      error: (error) => {
        console.error('Si è verificato un errore:', error);
      },
    };
    this.#httpService
      .getAllProducts()
      .pipe(
        map(prodotti => prodotti.map((prodotti: any) => ({ ...prodotti, id: prodotti.id_cliente }))),
        takeUntilDestroyed(this.#destroyRef)
      )
      .subscribe(observer);
  }


  modifica(prodotto: Prodotto): void {
    this.#viewService.prodotto$.next(prodotto);
    this.#router.navigateByUrl('products/update');
  }

  elimina(id: number) {
    this.#httpService
      .deleteProdotto(id)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        next: (response) => {
          // Handle the response from the service (optional)
          this.getAllProducts();
          console.log('Prodotto deleted successfully:', response);
        },
        error: (error) => {
          // Handle errors (optional)
          console.error('Error deleted Prodotto:', error);
        },
      });
  }
}

