import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/featurs/products/services/product.service';

@Component({
  selector: 'app-add-prodotto',
  templateUrl: './add-prodotto.component.html',
  styleUrls: ['./add-prodotto.component.scss']
})
export class AddProdottoComponent implements OnInit {
  homeForm! : FormGroup;

  constructor(private servizio : ProductService){}


  ngOnInit(): void {
    this.homeForm = new FormGroup({
      nome : new FormControl(),
      marca : new FormControl(),
      prezzo : new FormControl()
    })
  }


  onSubmit(){
    if (this.homeForm.valid) {
      const formData = this.homeForm.value; // Get the form data from the FormGroup
      this.servizio.addProdotto(formData).subscribe(
        (response) => {
          // Handle the response from the service (optional)
          console.log('Prodotto added successfully:', response);
        },
        (error) => {
          // Handle errors (optional)
          console.error('Error adding Prodotto:', error);
        }
      );
    }
  }

  }
