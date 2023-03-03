const {getAll,addOne,deleteOne,updateOne,getOnce}=require('../controller/student.controller')
const express=require('express')
const router=express.Router()
router.get('/',getAll)
router.get('/:id',getOnce)
router.post('/',addOne)
router.put('/:id',updateOne)
router.delete('/:id',deleteOne)
module.exports=router