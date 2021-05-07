import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { VendedorI } from 'src/app/dao/vendedor';
import { Vendedor } from 'src/app/model/vendedor';
import { VendedorService } from 'src/app/service/vendedor.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  idVendedor=0;
  contenido:string="";
  closeResult: string="";
  constructor(private modalService:NgbModal,
    private vendedorService:VendedorService,private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(form ?: NgForm):void{
    console.log(form?.value);
    this.vendedorService.login(form?.value)
    .subscribe(res=>{   
      if(res!='0'){
        this.modalService.dismissAll();
        this.vendedorService.vendedores=res as Vendedor[];
        console.log(this.vendedorService.vendedores[0].id_vendedor);
        localStorage.setItem("ID",this.vendedorService.vendedores[0].id_vendedor);

       this.router.navigateByUrl('/productos');
      }else{
        this.modalService.dismissAll();
        console.log('no entre');
      }
      
      console.log(res);
      //this.modalService.dismissAll();
    });
}

    //================================================================================================
  //=================metodos para modal de de registro de clientes y login========================== 
  //===============================================================================================
  open(content:any) {
    this.contenido=content;
   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
     this.closeResult = `Closed with: ${result}`;
   }, (reason) => {
     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
   });
 }
 private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}

}
