import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import *as myUrl from '../../environments/environment';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  seleccionProducto:Producto;
  productos:Producto[];

  private readonly URL_API='/api/book';
  constructor(private http: HttpClient) { 
    this.seleccionProducto=new Producto();
    this.productos=new Array<Producto>();
  }
  getProductos(){
    return this.http.get(this.URL_API);
  }
  addproducto(products: any){
    return this.http.post(this.URL_API,products);
  }
  deleteProducto(id: string){
    return this.http.delete(this.URL_API+`/${id}`);
  }
  updateProduct(products: any){
    return this.http.put(this.URL_API+`/${products.id_book}`,products);
  }
}
