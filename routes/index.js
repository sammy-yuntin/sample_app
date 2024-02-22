import UserRoutes from "./user.js"
import express from "express"
const router = express.Router()

router.use('/user', UserRoutes)

export default router;