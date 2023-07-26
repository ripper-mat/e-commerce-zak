import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroup } from '@angular/forms';
import { CustomersHttpService } from 'src/app/featurs/customers/services/customers-http.service';
import { ClienteForm } from './add-cliente-form.interface';
import { CustomersViewService } from '../../services/customers-view.service';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.scss'],
})
export class AddClienteComponent implements OnInit {
  homeForm!: FormGroup<ClienteForm>;
  readonly #destroyRef = inject(DestroyRef);
  readonly #viewService = inject(CustomersViewService);
  readonly #httpService = inject(CustomersHttpService);

  ngOnInit(): void {
    this.homeForm = this.#viewService.getForm();
/*     const nome = this.homeForm.get('nome');
    nome?.setValue(67876) */
  }

  onSubmit() {
    if (this.homeForm.valid) {
      this.#httpService.addCliente(this.homeForm.getRawValue())
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        next: (response) => {
          // Handle the response from the service (optional)
          console.log('Cliente added successfully:', response);
        },

        error: (error) => {
          // Handle errors (optional)
          console.error('Error adding cliente:', error);
        },
      });
    }
  }
}
