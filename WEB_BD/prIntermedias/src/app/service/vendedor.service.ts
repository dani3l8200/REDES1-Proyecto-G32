import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vendedor } from '../model/vendedor';
import *as myUrl from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class VendedorService {
  seleccionVendedor:Vendedor;
  vendedores:Vendedor[];

   private readonly URL_API="api/vendedor";

  constructor(private http: HttpClient) {
    this.seleccionVendedor=new Vendedor();
    this.vendedores=new Array<Vendedor>();

   }
   getVendedores(){
     console.log(this.URL_API);
     return this.http.get(this.URL_API);
   }
   addVendedor(vendedor:any){
     return this.http.post(this.URL_API,vendedor);
   }
   updateVendedor(Vendedor:any){
    // return this.http.put(this.URL_API+`/${Vendedor.id_vendedor}`,Vendedor);
     return this.http.put(this.URL_API+`/${Vendedor.id_vendedor}`,Vendedor);
   }
   deleteVendedor(id:string){
     return this.http.delete(this.URL_API+`/${id}`);
   }
   login(objeto:any){
     return this.http.post(this.URL_API+'/login',objeto);
   }
}
