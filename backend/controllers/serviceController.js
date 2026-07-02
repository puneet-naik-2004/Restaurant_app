// const menu = require("../modules/menu");


exports.createMenuItem=async(req,res)=>{
try{
      const data= new menu(req.body)
    await data.save();
    res.status(200).json(data)     
}catch(error){
    res.status(500).json(eerror)
    console.log(error);
}
}

exports.getMenuItem=async(req,res)=>{
    try{
    const data= await menu.find()
    res.status(200).json(data)

}catch(error){
    res.status(500).json(error)
    console.log(error)
}
}


exports.updateMenuItem=async(req,res)=>{
try{
    const data=await menu.findByIdAndUpdate(req.params.id,req.find,{new:true});
    res.status(200).json(data)

    if(!menu){
    res.status(404).json({message:"menu is not found"})
    }
}catch(error){
res.status(500).json(error)
console.log(error)
}
}

exports.deleteMenuItem=async(req,res)=>{
try{
    const data= await menu.findByIdAndDelete(req.params.id);
    res.status(200).json(data)

    if(!menu){
        res.status(404).json({error:"menu is not found"})
    }
}catch(error){
    res.status(500).json(error)
    console.log(error);
}
}