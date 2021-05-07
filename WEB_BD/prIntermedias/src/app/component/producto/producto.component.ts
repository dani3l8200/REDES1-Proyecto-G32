import { Component, OnInit } from '@angular/core';
import {ProductoService } from '../../service/producto.service';
import { Producto } from '../../model/producto';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  bandera=0;
  constructor(public productoService:ProductoService) { }

  ngOnInit(): void {
    this.getProducto();

  }
  getProducto(){
    this.productoService.getProductos()
    .subscribe(res=>{
      this.productoService.productos=res as Producto[];
      console.log(this.productoService.productos);
    })
  }
  addProduct(form ?:NgForm){
    console.log(form?.value);
    if(this.bandera==0){
    this.productoService.addproducto(form?.value)
    .subscribe(res=>{
      console.log(res);
      this.resetForm(form);

      this.getProducto();

    })
  }else{
    this.productoService.updateProduct(form?.value)
    .subscribe(res=>{
      this.resetForm(form);
      this.getProducto();
      this.bandera=0;
    });
  }
  }
  openForEdit(producto: Producto){
    console.log(producto);
    this.bandera=1;
    this.productoService.seleccionProducto=producto;
  }
  deleteProduct(_id: string){
    this.productoService.deleteProducto(_id)
    .subscribe(res=>{
      this.getProducto();
    });

  }
  //==========LIMPIAR FORM================
  resetForm(form?: NgForm){
    if(form){
      form.reset();
    }
  }
}
