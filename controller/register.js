import { User,firstTimeUser } from "../model/index.js";
const register = async (req,res)=>{
    try {
        console.log("user registered");
        console.log(req.body);
        
        const {email, password} = req.body;
        if (!email || !password) {
            res.send("email and password are compulsory")
        }else{
            const emailExists = await firstTimeUser.find({"email":email})

            const user = new firstTimeUserUser({email,password})
            const savedUser = user.save()
            res.send("registered")
        }
        
    } catch (error) {
        console.log(error);
    }
}
export default register;