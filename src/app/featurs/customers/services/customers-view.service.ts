import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  Cliente,
  ClienteForm,
} from '../components/add-cliente/add-cliente-form.interface';
import { BehaviorSubject } from 'rxjs';

// un service è un punto per salvare i dati e immettere la logica NON DIRE CHE è UN CLOUD
@Injectable()
export class CustomersViewService {
  // salviamo il cliente da modificare in modo che il componente updateCliente possa recuperarlo alla necessità
  cliente$: BehaviorSubject<Cliente | null> =
    new BehaviorSubject<Cliente | null>(null);

  // ?? => null coalescing operator
  getForm(cliente?: Cliente): FormGroup<ClienteForm> {
    return new FormGroup<ClienteForm>({
      id: new FormControl<number | undefined>(cliente?.id ?? undefined, {
        nonNullable: true,
      }),
      nome: new FormControl<string>(cliente?.nome ?? '', { nonNullable: true }),
      cognome: new FormControl<string>(cliente?.cognome ?? '', {
        nonNullable: true,
      }),
      cartaDiCredito: new FormControl<string>(cliente?.cartaDiCredito ?? '', {
        nonNullable: true,
      }),
    });
  }
}
