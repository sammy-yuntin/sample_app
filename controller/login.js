const login = async (req,res)=>{
    try {
        console.log("user logged in");
        res.send("logged in")
    } catch (error) {
        console.log(error);
    }
    
    return {
        message: "successfuly logged in",
        status: "success",
        details: "NO DETAILS TO SHOW FROM HERE"
    }
}
export default login;