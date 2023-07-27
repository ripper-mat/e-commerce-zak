import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  Prodotto,
  ProdottoForm,
} from '../components/product.interface';
import { BehaviorSubject } from 'rxjs';



@Injectable()
export class ProductViewService {

  // salviamo il prodotto da modificare in modo che il componente updateprodotto possa recuperarlo alla necessità
  prodotto$: BehaviorSubject<Prodotto | null> =
    new BehaviorSubject<Prodotto | null>(null);

  // ?? => null coalescing operator
  getForm(prodotto?: Prodotto): FormGroup<ProdottoForm> {
    return new FormGroup<ProdottoForm>({
      id: new FormControl<number | undefined>(prodotto?.id ?? undefined, {
        nonNullable: true,
      }),
      nome: new FormControl<string>(prodotto?.nome ?? '', { nonNullable: true }),
      marca: new FormControl<string>(prodotto?.marca ?? '', {
        nonNullable: true,
      }),
      prezzo: new FormControl<number>(prodotto?.prezzo ?? 0, {nonNullable: true,}),
    });
  }
}
