var express=require('express');
var router=express.Router();
var libroCtr=require('../controller/libro.controller');

router.get('/',libroCtr.getBook);
router.post('/',libroCtr.addBook);
router.put('/:id',libroCtr.updateBook);
router.delete('/:id',libroCtr.deleteBook);

module.exports=router;
