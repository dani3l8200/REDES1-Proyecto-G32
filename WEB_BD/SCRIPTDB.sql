create database proyectoRedes;

use proyectoRedes;

CREATE TABLE book(
    id_book INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    title VARCHAR(150) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    descripcion TEXT
);
create table venta(
	id_transaccion int not null auto_increment primary KEY,
	id_vendedor INT NOT NULL,
    fecha timestamp not null DEFAULT current_timestamp,
    id_book int not null,
    foreign key (id_vendedor) references vendedor(id_vendedor),
    foreign key (id_book) references book(id_book)
    ON  DELETE CASCADE
    ON UPDATE CASCADE
);
CREATE TABLE vendedor(
    id_vendedor INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dpi INT NOT NULL,
    username VARCHAR(16) NOT NULL,
    clave VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    telefono VARCHAR(100) NOT NULL
);

insert into vendedor(dpi,username,clave,fullname,lastname,direccion,telefono)
 values (233423,'user1','123','usuario','users','masa','04525424');

select * from vendedor;
update vendedor set dpi='1334523',username='update',clave='123',fullname='dbas',
lastname='sadb',direccion='basesss',telefono='272554' where id_vendedor=2;
select * from vendedor where username='user1' and clave='123';

select * from book;

insert into book(title,autor,descripcion)values('titulo','saber','describir');

select * from venta;
insert into venta(id_vendedor,id_book)values(1,1);

select lib.title,us.fullname,us.lastname,venta.fecha
from venta
INNER JOIN book  lib ON venta.id_book=lib.id_book
INNER JOIN vendedor us ON venta.id_vendedor=us.id_vendedor;



insert into book(title,autor,descripcion)
 values('tituloexample','autorExample','descr');
 
 
 
 
 
 
-- ESTOS SON so permisos,  acaba de instalar mysql 
ALTER USER 'root'@'localhost' IDENTIFIED BY 'dbsamines'; 

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'dbsamines';
FLUSH PRIVILEGES;