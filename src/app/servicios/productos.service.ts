import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  private productUrl= 'https://fakestoreapi.com/products';
  obtenerProductos(){
    return this.http.get(this.productUrl)
  }
  getProductById(id: number): Observable<Product>{
    const url = `${this.productUrl}/${id}`;
    return this.http.get<Product>(url)
  }
}
