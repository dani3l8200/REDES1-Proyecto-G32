export class Vendedor {
    id_vendedor:string;
    dpi:string;
    username:string;
    clave:string;
    fullname:string;
    lastname:string;
    direccion:string;
    telefono:string;
    constructor(id_vendedor="",dpi="",username="",clave="",fullname="",lastname="",direccion="",telefono=""){
        this.id_vendedor=id_vendedor;
        this.dpi=dpi;
        this.username=username;
        this.clave=clave;
        this.fullname=fullname;
        this.lastname=lastname;
        this.direccion=direccion;
        this.telefono=telefono;
    }
}
