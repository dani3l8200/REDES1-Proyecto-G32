import { Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/model/venta';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(public bookService: BookService) { }

  ngOnInit(): void {
    this.getBookVenta();
  }
  getBookVenta(){
    this.bookService.getVentaBook()
    .subscribe(res=>{
      this.bookService.ventas=res as Venta[];
    });
  }

}
