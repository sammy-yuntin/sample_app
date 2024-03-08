import { addUser, viewUsers,update,viewUser, deleteUser } from "../controller/index.js";
import express from "express"


const router = express.Router();

/**Create user */
router.post('/', addUser);

/**  Read Users */
router.get('/users', viewUsers);

/* Update User */
router.patch('/update/:id', update);

/* Read a specific User */
router.get("/user/:id", viewUser);

/* Delete User bby Id */
router.delete('/remove/:id', deleteUser);

export default router;