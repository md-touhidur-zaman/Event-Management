/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { serverFetch } from "@/lib/server-fetch"
import { IGetEventsParams } from "@/types/event.interface"

export const getEventInfo = async(id: string):Promise<any> =>{
    try {
        const res = await serverFetch.get(`/event/${id}`).then((res)=>res.json())

        return res

    } catch (error:any) {
        return {
            success:false,
            message: error?.message
        }
        
    }

}

export const getAllEventInfo = async(params: IGetEventsParams | null):Promise<any> =>{
    try {
        const res = await serverFetch.get(`/event?searchTerm=${params?.searchTerm}&&category=${params?.category}&&location=${params?.location}&&page=${params?.page}`,{
            next: {
                tags: ["Events"]
            }
        }).then((res)=>res.json())
        return res
        
    } catch (error:any) {
        return {
            success:false,
            message: error?.message
        }
        
    }
}