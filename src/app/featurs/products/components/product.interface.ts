import { FormControl, FormGroup } from "@angular/forms";
// Form model
export interface ProdottoForm{
  id_prodotto? : FormControl<number | undefined>;
  nome : FormControl<string>;
  marca : FormControl<string>;
  prezzo : FormControl<number>;
}
/*
// Data Model = >Forma estesa nella scrittura del codice
export interface Cliente{
  nome : string;
  cognome : string;
  cartaDiCredito : string;
} */
// Data Model = > Forma abbreviata
export type Prodotto = ReturnType<FormGroup<ProdottoForm>['getRawValue']> & Partial<{id_prodotto:number}>;
/* export type PartialClientForm = Partial<AddClienteForm> */
