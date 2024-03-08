import { User } from "../model/index.js";

export const create = async (payload) => {
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