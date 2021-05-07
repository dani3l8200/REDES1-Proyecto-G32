var express=require('express');
var router=express.Router();
const vendedorCtr=require('../controller/vendedor.controller');

router.get('/',vendedorCtr.getVendedores);
router.post('/',vendedorCtr.addVendedor);
router.put('/:id',vendedorCtr.updateVendedor);
router.delete('/:id',vendedorCtr.deleteVnededor);
router.post('/login',vendedorCtr.login);
module.exports=router;
