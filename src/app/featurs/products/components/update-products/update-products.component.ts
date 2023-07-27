import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { Prodotto, ProdottoForm } from '../product.interface';
import { FormGroup } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { ProductViewService } from '../../services/product-view.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.scss']
})
export class UpdateProductsComponent implements OnInit {
  homeForm!: FormGroup<ProdottoForm>;
  readonly #destroyRef = inject(DestroyRef);
  readonly #viewService = inject(ProductViewService);
  readonly #httpService = inject(ProductService);
  readonly #router = inject(Router);

  ngOnInit(): void {
    this.#viewService.prodotto$.pipe(takeUntilDestroyed(this.#destroyRef))
    .subscribe({
      next: (prodotto: Prodotto | null) => {
        if (prodotto) {
          this.homeForm = this.#viewService.getForm(prodotto as Prodotto);
        } else {
          this.#router.navigateByUrl('customers');
        }
      }
    })
  }

  onSubmit() {
    if (this.homeForm.valid) {
      this.#httpService.updateProdotto(this.homeForm.getRawValue())
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        next: (response) => {
          // Handle the response from the service (optional)
          console.log('Prodotto updated successfully:', response);
        },
        error: (error) => {
          // Handle errors (optional)
          console.error('Error updated Prodotto:', error);
        },
      });
    }
  }
}
