/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { getCookie } from "@/lib/tokenHandler"
import jwt, { JwtPayload } from "jsonwebtoken"

export const getUserInfo = async() =>{
    try {
        const accessToken = await getCookie("accessToken")
        if(!accessToken){
            return null
        }

        const verifiedToken = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET_KEY as string) as JwtPayload

        if(!verifiedToken){
            return null
        }

        const userInfo = {
            name: verifiedToken?.name,
            email: verifiedToken?.email,
            role: verifiedToken?.role
        }

        return userInfo
        
    } catch (error: any) {
        return {
            success:false,
            message: error?.message
        }
        
    }
}