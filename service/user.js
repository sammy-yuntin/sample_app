import { create } from "../repository/index.js";

export const createUser = async (payload) => {
    const user = await create(payload)
    return {
        message: "You've successfully registered",
        status: "Success",
        details: user
    }
}