const vendeorCtrl={};
const mysql=require('../database');

vendeorCtrl.getVendedores=function(req,res){
   let consulta="select * from vendedor";
   mysql.query(consulta,function(err,results){
    if(!err){
        return res.status(200).json(results);
    }else{
        return res.status(404).json({"error":err});
    }
   });
}
vendeorCtrl.addVendedor=function(req,res){
    var vendedor={dpi:req.body.dpi,username:req.body.username,clave:req.body.clave,
        fullname:req.body.fullname,lastname:req.body.lastname,
        direccion:req.body.direccion,telefono:req.body.telefono}

        const sql="insert into vendedor set?";
        mysql.query(sql,vendedor,function(err,result){
            if(!err){
                return res.status(200).json({"estado":"Registrado"});
            }else{
                return res.status(404).json({"error":err});
            }
        });
}
vendeorCtrl.updateVendedor=function(req,res){
    //console.log(req.body);
    const sql=`update vendedor set dpi=${req.body.dpi},username='${req.body.username}',clave='${req.body.clave}',fullname='${req.body.fullname}',
            lastname='${req.body.lastname}',direccion='${req.body.direccion}',telefono='${req.body.telefono}' where id_vendedor=${req.params.id}`;
        mysql.query(sql,function(err,result){
            if(!err){
                return res.status(200).json({"estado":"actualizado"});
            }else{
                return res.status(404).json({"err":err});
            }
        });
    
}
vendeorCtrl.deleteVnededor=function(req,res){
    const sql=`delete from vendedor where id_vendedor=${req.params.id}`;
    mysql.query(sql,function(err,result){
        if(!err){
            return res.status(200).json({"estado":"eliminado"});
        }else{
            return res.status(404).json({"estado":err});
        }
    });
}
vendeorCtrl.login=function(req,res){
    const sql=`select * from vendedor where username='${req.body.username}' and clave='${req.body.clave}'`;
    mysql.query(sql,function(err,result){
        if(!err){
            if(Object.keys(result).length!=0){
            return res.status(200).json(result);
            }else{
                return res.status(200).json("0");
            }
        }else{
            return res.status(404).json({'error':err});
        }
    });
}
module.exports=vendeorCtrl;
