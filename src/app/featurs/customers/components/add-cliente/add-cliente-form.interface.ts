import { FormControl, FormGroup } from "@angular/forms";
// Form model
export interface ClienteForm{
  id? : FormControl<number | undefined>;
  nome : FormControl<string>;
  cognome : FormControl<string>;
  cartaDiCredito : FormControl<string>;
}
/*
// Data Model = >Forma estesa nella scrittura del codice
export interface Cliente{
  nome : string;
  cognome : string;
  cartaDiCredito : string;
} */
// Data Model = > Forma abbreviata
export type Cliente = ReturnType<FormGroup<ClienteForm>['getRawValue']> & Partial<{id:number}>;
/* export type PartialClientForm = Partial<AddClienteForm> */
