import express from 'express'
import { Createuser, deleteUser, getuser, getUserById, updateUser } from '../controllers/Usercontroller.js'

const router = express.Router()

router.post("/", Createuser)
router.get("/", getuser)
router.get("/:id", getUserById)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)



export default router


// types of middleware , axios instance , axios interceptor  