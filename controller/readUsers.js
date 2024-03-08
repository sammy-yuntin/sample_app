import {fetchUsers} from "../service/index.js"; 

const viewUsers = async (req,res)=>{
    try {
        var users = await fetchUsers();
        return res.status(200).json(users)
    } catch (error) {
        console.log(error)
    }
    
}
export default viewUsers;