var express=require('express');
var router=express.Router();
var ventascontrol=require('../controller/venta.controller');

router.get('/',ventascontrol.getVentas);
router.post('/',ventascontrol.addVenta);

module.exports=router;
