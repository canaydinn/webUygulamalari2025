const router=require("express").Router()
const {kullanici_ekle,login}=require("../controllers/controllers")
router.post("/login",login)
router.post("/register",kullanici_ekle)
module.exports=router