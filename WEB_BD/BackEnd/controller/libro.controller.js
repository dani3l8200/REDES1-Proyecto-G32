const bookCtr={};
const mysql=require('../database');

bookCtr.getBook=function(req,res){
    const sql=`select * from book`;
    mysql.query(sql,function(err,result){
        if(!err){
            return res.status(200).json(result);
        }else{
            return res.status(404).json({"estado":err});
        }
    });
}
bookCtr.addBook=function(req,res){
    var book={title:req.body.title,autor:req.body.autor,descripcion:req.body.descripcion}
    const sql=`insert into book set?`;
    mysql.query(sql,book,function(err,result){
        if(!err){
            return res.status(200).json({"estado":"registrado"});
        }else{
            return res.status(404).json({"error":err});
        }
    });
}
bookCtr.updateBook=function(req,res){

    const sql=`update book set title='${req.body.title}',autor='${req.body.autor}',descripcion='${req.body.descripcion}' 
                where id_book=${req.params.id}`;
    mysql.query(sql,function(err,result){
        if(!err){
            return res.status(200).json({"estado":"actualizado"});
        }else{
            return res.status(404).json({"err":err});
        }
    });
}
bookCtr.deleteBook=function(req,res){
    const sql=`delete from book where id_book=${req.params.id}`;
    mysql.query(sql,function(err,result){
        if(!err){
            return res.status(200).json({"estado":"eliminado"});
        }else{
            return res.status(404).json({"error":err});
        }
    });
}

module.exports=bookCtr;