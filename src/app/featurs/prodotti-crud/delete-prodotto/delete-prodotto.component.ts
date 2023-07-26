import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-delete-prodotto',
  templateUrl: './delete-prodotto.component.html',
  styleUrls: ['./delete-prodotto.component.scss']
})
export class DeleteProdottoComponent implements OnInit {
  homeForm! : FormGroup;

  constructor(private servizio : ProductService){}


  ngOnInit(): void {
    this.homeForm = new FormGroup({
      id : new FormControl()
    })
  }


  onSubmit(){
    if (this.homeForm.valid) {
      const formData = this.homeForm.value.id; // Get the form data from the FormGroup
      this.servizio.deleteProdotto(formData).subscribe(
        (response) => {
          // Handle the response from the service (optional)
          console.log('Prodotto deleted successfully:', response);
        },
        (error) => {
          // Handle errors (optional)
          console.error('Error deleted Prodotto:', error);
        }
      );
    }
  }
}
