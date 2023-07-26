import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomersHttpService } from 'src/app/featurs/customers/services/customers-http.service';
import { CustomersViewService } from 'src/app/featurs/customers/services/customers-view.service';
import { AddClienteComponent } from './components/add-cliente/add-cliente.component';
import { UpdateClienteComponent } from './components/update-cliente/update-cliente.component';
import { DeleteClienteComponent } from './components/delete-cliente/delete-cliente.component';
import { ListaClientiComponent } from './components/lista-clienti/lista-clienti.component';


@NgModule({
  declarations: [
    CustomersComponent,
    AddClienteComponent,
    UpdateClienteComponent,
    DeleteClienteComponent,
    ListaClientiComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    CustomersViewService,
    CustomersHttpService // Fornisci il servizio a livello di modulo
  ]
})
export class CustomersModule { }
