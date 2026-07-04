const service = require("../modules/service")

exports.createService= async(req,res)=>{
    try{
     const data = new service(req.body)
     await data.save();
     res.status(200).json(data)
    }catch(error){
res.status(400).json(error)
console.log(error)
    }
}


exports.getService=async(req,res)=>{
    try{
          const data = await service.find()
          res.status(200).json(data) 
    }catch(error){
        res.status(400).json(error)
        console.log(error)

    }
}


exports.updateService=async(req,res)=>{
    try{
         const data = await service.findByIdAndUpdate(req.params.id,req.body)
         res.status(200).json(data)
    }catch(error){
         res.status(400).json(error)
         console.log(error);
    }
}


exports.deleteService=async(req,res)=>{
    try{
  const data= await service.findByIdAndDelete(req.params.id)
  res.status(200).json(data)
    }catch(error){
        res.status(400).json(error)
        console.log(error)

    }
}