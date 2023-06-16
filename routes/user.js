const usercontroller=require("../controllers/user")

const  express=require("express")
const router=express.Router()
router.post("/add-user",usercontroller.adduser)
router.get("/get-users",usercontroller.getusers)
router.delete("/delete-user/:Userid",usercontroller.deleteuser)

module.exports=router