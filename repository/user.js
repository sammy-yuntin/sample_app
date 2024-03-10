import { User } from "../model/index.js";
import bcrypt from "bcryptjs"

export const create = async (payload) => {
    var {name, email,username, password} = payload;
    var salt = await bcrypt.genSalt(5);
    var password = await bcrypt.hash(password, salt)

    payload = {
        name,
        email,
        username,
        password
    }

    return await User.create(payload);
}

export const fetch = async ()=>{
    return await User.findAll();
}

export const fetchSpecific = async (id)=>{
    return await User.findByPk(id);
    
}

export const update = async (id,payload)=>{
    return await User.update(payload,
        {
            where : {
                id:id
            }
        });
}

export const remove = async (id) =>{
    return await User.destroy(
        {
        where: {
          id: id
        },
      });
}