import {  createUser } from "../service/index.js"

const addUser = async (req, res) => {
    try {
        const data = await createUser(req.body)
        // console.log("user: ", data)
        return data 
    } catch (error) {
        console.log("err: ", error)
    }
}

export default addUser