import { removeUser } from "../service/index.js";


const deleteUser = async (req,res) => {
    try {

        const {id} = req.params;
        var deleted = await removeUser(id,req.body);
        return res.status(200).json(deleted);
    } catch (error) {
        console.log(error.message)
    }
}

export default deleteUser;
