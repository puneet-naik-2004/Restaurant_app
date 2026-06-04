const express= require("express");
const { createPerson,getPerson,updatePerson,deletePerson } = require("../controllers/personController");

const router= express.Router();

router.post("/",createPerson);
router.get("/",getPerson);
router.put("/:id",updatePerson);
router.delete("/:id",deletePerson);

module.exports=router;