import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { Observer, map } from 'rxjs';
import { CustomersHttpService } from '../../services/customers-http.service';
import { CustomersViewService } from '../../services/customers-view.service';
import { Cliente } from '../add-cliente/add-cliente-form.interface';

@Component({
  selector: 'app-lista-clienti',
  templateUrl: './lista-clienti.component.html',
  styleUrls: ['./lista-clienti.component.scss']
})
export class ListaClientiComponent  implements OnInit {
  clients: Array<Cliente> | undefined;
  readonly #destroyRef = inject(DestroyRef);
  readonly #viewService = inject(CustomersViewService);
  readonly #httpService = inject(CustomersHttpService);
  readonly #router = inject(Router);

  ngOnInit(): void {
    this.getAllClients();
  }

  getAllClients(): void {
    const observer: Partial<Observer<any>> = {
      next: (data) => {
        this.clients = data;
        console.log(data);
      },
      error: (error) => {
        console.error('Si è verificato un errore:', error);
      },
    };
    this.#httpService
      .getAllClients()
      .pipe(
        map(customers => customers.map((customer: any) => ({ ...customer, id: customer.id_cliente }))),
        takeUntilDestroyed(this.#destroyRef)
      )
      .subscribe(observer);
  }

  modifica(cliente: Cliente): void {
    this.#viewService.cliente$.next(cliente);
    this.#router.navigateByUrl('customers/update');
  }

  elimina(id: number) {
    this.#httpService
      .deleteCliente(id)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        next: (response) => {
          // Handle the response from the service (optional)
          this.getAllClients();
          console.log('Cliente deleted successfully:', response);
        },
        error: (error) => {
          // Handle errors (optional)
          console.error('Error deleted cliente:', error);
        },
      });
  }

}
