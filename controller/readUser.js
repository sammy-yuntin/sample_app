import { fetchUser } from "../service/index.js";

const viewUser = async (req,res)=>{
    try {
        const { id } = req.params;
        var user = await fetchUser(id);
        return res.status(200).json(user);
        
    } catch (error) {
        console.log(error)
    }
    
}
export default viewUser;
