import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { AddClienteComponent } from './components/add-cliente/add-cliente.component';
import { UpdateClienteComponent } from './components/update-cliente/update-cliente.component';
import { ListaClientiComponent } from './components/lista-clienti/lista-clienti.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent,
    children: [
      { path: '', component: ListaClientiComponent },
      { path: 'new', component: AddClienteComponent },
      { path: 'update', component: UpdateClienteComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
