import { addUser } from "../controller/index.js";
import express from "express"

const router = express.Router()

/**Create user */
router.post('/', addUser)


export default router;