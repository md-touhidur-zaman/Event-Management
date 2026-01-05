/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { serverFetch } from "@/lib/server-fetch"
import { revalidateTag } from "next/cache"

export const getLoginUserInfo = async(): Promise<any> =>{
    try {
        const res = await serverFetch.get("/user/user-info", {
            next: {
                tags: ["UserInfo"]
            }
        }).then((res)=> res.json())
        return res
        
    } catch (error:any) {
        return {
            success: false,
            message: error?.message
        }
        
    }
}

export const updateUserInfo = async(_currentState: any, formData: any): Promise<any>=>{
    try {
        const updatedData = {
            name: formData.get("name"),
            phone: formData.get("phone"),
            location: formData.get("location"),
            about: formData.get("about"),
            current_password: formData.get("current_password"),
            new_password: formData.get("new_password"),
        }

        const file = formData.get("image")

        const newUpdatedFormData = new FormData()
        newUpdatedFormData.append("data", JSON.stringify(updatedData))
        newUpdatedFormData.append("file", file)

        const res = await serverFetch.patch("/user/update-user", {
            body:newUpdatedFormData
        }).then((res)=>res.json())

        if(res.success){
            revalidateTag("UserInfo", {expire:0})
        }
        return res
    } catch (error: any) {
        return {
            success:false,
            message: error?.message
        }
        
    }
}