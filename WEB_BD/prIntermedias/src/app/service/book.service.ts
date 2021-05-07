import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Venta } from '../model/venta';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  seleccionVenta:Venta;
  ventas:Venta[];
  private readonly URL_API="/api/venta";

  constructor(private http: HttpClient) {
    this.seleccionVenta=new Venta();
    this.ventas=new Array<Venta>();
   }
  getVentaBook(){
    return this.http.get(this.URL_API);
  }
  addBookVenta(venta: any){
    return this.http.post(this.URL_API,venta);
  }
}
