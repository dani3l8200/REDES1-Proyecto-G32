const loginCtrl={};
const mysql=require('../database');
loginCtrl.login=function(req,res){
    const sql=`select * from vendedor where username='${req.body.username}' and clave='${req.body.clave}'`;
    mysql.query(sql,function(err,result){
        if(!err){
            
            return res.status(200).json(result);
        }else{
            return res.status(404).json({'error':err});
        }
    });
}
module.exports=loginCtrl;