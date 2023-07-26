import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/app/enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = enviroment.api;

  constructor(private http: HttpClient) { }


  getAllOrders(): Observable<any> {
    const url = `${this.baseUrl}/myordine/all`;
    return this.http.get(url);
  }
}
