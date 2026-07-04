const express= require("express");

const cors=require("cors");

const connectDB= require("./config/db");

const personRouters=require("./routers/personRoute")
const menuItemRouters=require("./routers/menuItemRoutes");
// const person = require("./modules/person");
const serviceRoutes=require("./routers/serviceRoutes")

const app=express();

app.use(cors());
app.use(express.json())

connectDB();

app.use("/person",personRouters);
app.use("/menu",menuItemRouters);
app.use("/service",serviceRoutes);


app.listen(5000,()=>{
console.log("sserver run port 5000")
})