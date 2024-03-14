import { addUser, viewUsers,update,viewUser, deleteUser, login, logOut, register, refresh } from "../controller/index.js";
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

//auth routes//
/* login */
router.post('/login', login)
/* register */
router.post('/register', register)
/* refresh-token */
router.post('/refresh', refresh)
/* logOut */
router.delete('/logout', logOut)

export default router;