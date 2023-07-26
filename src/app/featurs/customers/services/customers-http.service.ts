import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from 'src/app/enviroments/environment';
import { Cliente } from 'src/app/featurs/customers/components/add-cliente/add-cliente-form.interface';

@Injectable({
  providedIn: 'root',
})
export class CustomersHttpService {
  private baseUrl = enviroment.api;

  constructor(private http: HttpClient) {}

  getAllClients(): Observable<any> {
    const url = `${this.baseUrl}/mycliente/all`;
    return this.http.get(url);
  }

  findByNomeClient(): Observable<any> {
    const url = `${this.baseUrl}/mycliente/all`;
    return this.http.get(url);
  }

  addCliente(formData: Cliente): Observable<Cliente> {
    const url = `${this.baseUrl}/mycliente/add`;
    return this.http.post<Cliente>(url, formData);
  }

  deleteCliente(id: number): Observable<any> {
    const url = `${this.baseUrl}/mycliente/delete/${id}`;
    return this.http.delete(url);
  }

  updateCliente(formData: Cliente): Observable<Cliente> {
    const { id, cartaDiCredito, cognome, nome } = formData;
    const url = `${this.baseUrl}/mycliente/update/${id}`;
    const params = new HttpParams().appendAll({
      cartaDiCredito,
      nome,
      cognome,
    });
    return this.http.put<Cliente>(url, formData, {
      params,
    });
  }
}
