import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"


// register user
export const registerAPI = async(user)=>{
    return await commonAPI("post", `${BASE_URL}/user/register`,user,"");
}

// login user
export const loginAPI = async(reqBody)=>{
    return await commonAPI("post", `${BASE_URL}/user/login`,reqBody,"")
}

// add project 
export const addProjectAPI = async(reqBody, reqHeader)=>{
    return await commonAPI('post', `${BASE_URL}/project/add`, reqBody, reqHeader)
}