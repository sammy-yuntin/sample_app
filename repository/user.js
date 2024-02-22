import { User } from "../model/index.js";

export const create = async (payload) => {
    return await User.create(payload)
}