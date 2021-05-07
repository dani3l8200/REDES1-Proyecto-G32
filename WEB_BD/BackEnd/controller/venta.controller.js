const ventaCtr={};
const mysql=require('../database');
ventaCtr.addVenta=function(req,res){
    var venta={id_vendedor:req.body.id_vendedor,id_book:req.body.id_book}

    const sql='insert into venta set?';
    mysql.query(sql,venta,function(err,result){
        if(!err){
            return res.status(200).json({"estado":"registrado"});
        }else{
            return res.status(404).json({"estado":err});
        }
    });
  //  insert into venta(id_vendedor,id_book)values(1,1);
}
ventaCtr.getVentas=function(req,res){
    const sql=`select lib.title,us.fullname,us.lastname,venta.fecha
                from venta
                INNER JOIN book  lib ON venta.id_book=lib.id_book
                INNER JOIN vendedor us ON venta.id_vendedor=us.id_vendedor`;
    mysql.query(sql,function(err,result){
        if(!err){
            return res.status(200).json(result);
        }else{
            return res.status(404).json({"error":err});
        }
    });

}

module.exports=ventaCtr;