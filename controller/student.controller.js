const {getAllStd,updateStudent,addStudent,deleteOne} =require('../Model/students')
const {search}=require('../Model/search')
module.exports.getAll=async(req,res)=>{
    try{
        let {page,per_page}=req.query
        let min=(Number(page)-1)*Number(per_page);
        let max=Number(page)*Number(per_page);
        let [result]=await getAllStd(min,max)
        res.status(200).json(result)
    }
    catch(err)
    {
        res.json(err)
    }
}
module.exports.addOne=async (req,res)=>{
    try{
        await addStudent(req.body.msv,req.body.name,req.body.age,req.body.status)
        res.status(200).json({
            status:"success"
        })
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}
module.exports.updateOne=async(req,res)=>{
    try{
        await updateStudent(req.params.id,req.body.msv,req.body.name,req.body.age,req.body.status)
        res.status(200).json({
            status:'success'
        })
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}
module.exports.deleteOne=async(req,res)=>{
    try{
        await deleteOne(req.params.id)
        res.status(200).json({
            status:'success'
        })
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}
module.exports.getOnce=async(req,res)=>{
    try{
        let [result]=await search(req.params.id)
        if (result.length==0) {
            res.status(200).json({
                status:"No result"
            })        
        }else{
            res.status(200).json(result)
        }
        }
    catch(err)
    {
        res.status(500).json(err)
    }    
}
