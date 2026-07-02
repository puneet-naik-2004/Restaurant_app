const person = require("../modules/person");

exports.createPerson=async(req,res)=>{
try{
const data = new person(req.body);
await data.save();
res.status(200).json(data)
}
catch(error){
    console.log(error);
    res.status(500).json(error)
}
}

exports.getPerson=async(req,res)=>{
try{
  const data =  await person.find();
  res.status(200).json(data);
}catch(error){
    console.log(error)
    res.status(500).json(error)
}
}


exports.updatePerson=async(req,res)=>{
 try{
    const data= await person.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(200).json(data);

    if(!person){
        res.status(400).json({error:"person not found"});
    }
 }catch(error){
  console.log(error)
  res.status(500).json(error)
 }
}


exports.deletePerson=async(req,res)=>{
try{
    const data= await person.findByIdAndDelete(req.params.id)
    res.status(200).json(data)

    if(!person){
        res.status(404).json({error:"person not founding"})
    }
}catch(error){
    console.log(error)
    res.status(400).json(error)
}
}

