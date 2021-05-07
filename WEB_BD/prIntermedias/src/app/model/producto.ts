
export class Producto {
    id_book:string;
    title:string;
    autor:string;
    descripcion:string;
    constructor(id_book="",title="",autor="",descripcion=""){
        this.id_book=id_book;
        this.title=title;
        this.autor=autor;
        this.descripcion=descripcion;
    }
}
