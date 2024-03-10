const logOut = async (req,res)=>{
    try {
        console.log("user logged out");
        res.send("User logged out")
    } catch (error) {
        console.log(error);
    }
}
export default logOut;