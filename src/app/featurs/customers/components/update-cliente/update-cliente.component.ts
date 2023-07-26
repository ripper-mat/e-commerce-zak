import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomersHttpService } from '../../services/customers-http.service';
import { Cliente, ClienteForm } from '../add-cliente/add-cliente-form.interface';
import { CustomersViewService } from '../../services/customers-view.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.component.html',
  styleUrls: ['./update-cliente.component.scss'],
})
export class UpdateClienteComponent implements OnInit {
  homeForm!: FormGroup<ClienteForm>;
  readonly #destroyRef = inject(DestroyRef);
  readonly #viewService = inject(CustomersViewService);
  readonly #httpService = inject(CustomersHttpService);
  readonly #router = inject(Router);

  ngOnInit(): void {
    this.#viewService.cliente$.pipe(takeUntilDestroyed(this.#destroyRef))
    .subscribe({
      next: (cliente: Cliente | null) => {
        if (cliente) {
          this.homeForm = this.#viewService.getForm(cliente as Cliente);
        } else {
          this.#router.navigateByUrl('customers');
        }
      }
    })
  }

  onSubmit() {
    if (this.homeForm.valid) {
      this.#httpService.updateCliente(this.homeForm.getRawValue())
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        next: (response) => {
          // Handle the response from the service (optional)
          console.log('Cliente updated successfully:', response);
        },
        error: (error) => {
          // Handle errors (optional)
          console.error('Error updated cliente:', error);
        },
      });
    }
  }
}
