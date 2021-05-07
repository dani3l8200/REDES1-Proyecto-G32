var express=require('express');
var router=express.Router();
const loginctr=require('../controller/login.controller');

router.post('/',loginctr.login);

module.exports=router;