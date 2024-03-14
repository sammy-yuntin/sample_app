import { updateUser } from "../service/index.js";

const update = async (req,res) =>{
    try {
        // console.log(req.params)

        const { id }  = req.params;
        const updated = await updateUser(id, req.body);
        return res.status(200).json(updated);
        
    } catch (error) {
        console.log(error.message);
    } 
}
export default update;