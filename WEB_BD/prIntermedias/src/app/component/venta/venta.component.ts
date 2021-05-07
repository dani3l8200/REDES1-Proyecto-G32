import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/service/producto.service';
import { BookService } from '../../service/book.service';
@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  bandera=0;
  
  constructor(public productoService:ProductoService,private router:Router,
    public ventaService:BookService) { }

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
    //console.log(form?.value);
    var objeto={
       id_vendedor:localStorage.getItem('ID'),
       id_book:form?.value.id_book
    }
    console.log(objeto);

    this.ventaService.addBookVenta(objeto)
    .subscribe(res=>{
      console.log(res);
      this.resetForm(form);

      this.router.navigateByUrl('/listado');

    })

  }
  openForEdit(producto: Producto){
    console.log(producto);
    this.bandera=1;
    this.productoService.seleccionProducto=producto;

  }
    //==========LIMPIAR FORM================
    resetForm(form?: NgForm){
      if(form){
        form.reset();
      }
    }
}
