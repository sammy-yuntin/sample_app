import  {create , fetch, update, fetchSpecific, remove} from "../repository/index.js";

export const createUser = async (payload) => {
    const user = await create(payload)

    /* if (!user){
        return {
            message: "You've successfully registered",
            status: "Success",
            details: user
        }
    } */
    return {
        message: "You've successfully registered",
        status: "Success",
        details: user
    }
}

export const fetchUsers = async ()=>{
    const users = await fetch()
    const usersCount = users.length;
    
    return ((usersCount == 0) ? 
        {
            message: "No users added yet",
            status:"success"
        }
        :
        {
            message: "succesfully retreived users",
            status:"success",
            count: `a total of ${usersCount} is available`,
            details: users
        })
    
    
}

export const updateUser = async (id,payload)=>{

    const initial = await fetchSpecific(id);

    let sameName = (initial.name == payload.name )
    let sameMail = (initial.email == payload.email)
    let samePass = (initial.password == payload.password)

    let isSame = (sameName && sameMail && samePass)
    
    if(!isSame){
        update(id, payload);
    }
    const new_change = await fetchSpecific(id);
    
    console.log(initial);

    //console.log(new_change.dataValues);
    /* if(!initial){
        return {   
            status:"success",
            message: `User with id ${id} not found`,
            
        }
        }else{ */
            return  (
                isSame ? 
                {
                    message: "Sorry, you cannot update with the same data as of old ",
                    status:"success"
                }
                :
                {   
                        status:"success",
                        message: "succesfully updated user",
                        details: new_change
                })
        }
    
/* } */


export const fetchUser = async (id)=>{
    const changed = await fetchSpecific(id);
    return {
        message: "successfuly fetched",
        status: "success",
        details: changed
    }
    
}

export const removeUser = async(id)=>{
    const removed = await fetchSpecific(id);
    const removal = await remove(id);
    ;

    return {
        message: "successfully Deleted",
        status: "success",
        details : removed
    }
    /* return ((!removed) ? 
        {
            message: `User with ${id} does not exist `,
            status:"success"
        }
        :
        {
            message: "succesfully deleted user",
            status:"success",
            details: removed
        }) */
}

export const login = (req,res,payload)=>{
    
    return {
        
    }
}