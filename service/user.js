import  {create , fetch, update, fetchSpecific, remove} from "../repository/index.js";

export const createUser = async (payload) => {
    const user = await create(payload)
    return {
        message: "You've successfully registered",
        status: "Success",
        details: user
    }
}

export const fetchUsers = async ()=>{
    const users = await fetch()
    return {
        message: "succesfully retreived users",
        status:"success",
        details: users
    }
}

export const updateUser = async (id,payload)=>{

    const new_user = await update(id, payload);
    const new_change = await fetchSpecific(id);

    //console.log(new_change.dataValues);

    return {
        message: "successfuly updated user with id",
        status: "success",
        details: new_change
    }
}

export const fetchUser = async (id)=>{
    const changed = await fetchSpecific(id);
    return {
        message: "successfuly fetched",
        status: "success",
        details: changed
    }
    
}

export const removeUser = async(id)=>{
    const removal = await remove(id);
    const removed = await fetchSpecific(id);

    return {
        message: "successfully Deleted",
        status: "success",
        details : removed
    }
}