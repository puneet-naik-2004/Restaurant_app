
const express= require("express")
const {createMenuItem,getMenuItem,updateMenuItem,deleteMenuItem}=require("../controllers/menuItemController")


const router= express.Router()


router.post("/",createMenuItem);
router.get("/",getMenuItem);
router.put("/:id",updateMenuItem);
router.delete("/:id",deleteMenuItem);


module.exports=router;