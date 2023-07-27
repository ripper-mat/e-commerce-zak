import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/app/enviroments/environment';
import { Prodotto } from '../components/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private baseUrl = enviroment.api;

  constructor(private http: HttpClient) { }


  getAllProducts(): Observable<any> {
    const url = `${this.baseUrl}/myprodotto/all`;
    return this.http.get(url);
  }

  addProdotto(formData: any): Observable<any> {
    const url = `${this.baseUrl}/myprodotto/add`;
    return this.http.put(url, formData);
  }

  deleteProdotto(id_prodotto: number): Observable<any> {
    const url = `${this.baseUrl}/myprodotto/delete/${id_prodotto}`;
    return this.http.delete(url);
  }



  updateProdotto(formData: Prodotto): Observable<Prodotto> {
    const { id_prodotto, nome, marca, prezzo } = formData;
    const url = `${this.baseUrl}/myprodotto/update/${id_prodotto}`;
    const params = new HttpParams().appendAll({
      nome,
      marca,
      prezzo,
    });
    return this.http.put<Prodotto>(url, formData, {
      params,
    });
  }
}
