import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomersHttpService } from 'src/app/featurs/customers/services/customers-http.service';

@Component({
  selector: 'app-delete-cliente',
  templateUrl: './delete-cliente.component.html',
  styleUrls: ['./delete-cliente.component.scss']
})
export class DeleteClienteComponent implements OnInit {
  homeForm! : FormGroup;

  constructor(private servizio : CustomersHttpService){}


  ngOnInit(): void {
    this.homeForm = new FormGroup({
      id : new FormControl()
    })
  }


  onSubmit(){
    if (this.homeForm.valid) {
      const formData = this.homeForm.value.id; // Get the form data from the FormGroup
      this.servizio.deleteCliente(formData).subscribe(
        (response) => {
          // Handle the response from the service (optional)
          console.log('Cliente deleted successfully:', response);
        },
        (error) => {
          // Handle errors (optional)
          console.error('Error deleted cliente:', error);
        }
      );
    }
  }
}
