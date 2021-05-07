import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Vendedor } from 'src/app/model/vendedor';
import { VendedorService } from 'src/app/service/vendedor.service';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {
  bandera=0;

  constructor(public vendedorService:VendedorService) { }

  ngOnInit(): void {
  this.getVendedor();
  }
  getVendedor(){
    this.vendedorService.getVendedores()
    .subscribe(res=>{
      this.vendedorService.vendedores=res as Vendedor[];
      console.log(res);
    })
  }
  addVendedor(form ?:NgForm){
    console.log(form?.value);
    if(this.bandera==0){
    this.vendedorService.addVendedor(form?.value)
    .subscribe(res=>{
      console.log(res);
      this.resetForm(form);

      this.getVendedor();

    })
  }else{
    console.log(form?.value.id_vendedor);

    this.vendedorService.updateVendedor(form?.value)
    .subscribe(res=>{
      this.resetForm(form);
      this.getVendedor();
      this.bandera=0;
    });
  }
  }
  openForEdit(vendedor: Vendedor){
    console.log(vendedor);
    this.bandera=1;
    this.vendedorService.seleccionVendedor=vendedor;
  }
  deleteVendedor(_id: string){
    this.vendedorService.deleteVendedor(_id)
    .subscribe(res=>{
      this.getVendedor();
    });

  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
    }
  }
}
