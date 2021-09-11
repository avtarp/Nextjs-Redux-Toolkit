import { getSession } from "next-auth/client"
import { useState } from "react";
const GetTokenValue = ()=>{
    const [token,setToken] = useState<string | any>('')

    const session = async ()=>{
        const userDetails = await getSession();
        setToken(userDetails?.accessToken)
    }
    session()
    return token
}

export default GetTokenValue;