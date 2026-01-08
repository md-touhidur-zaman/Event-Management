"use client"

import { Button } from "@/components/ui/button"
import { IAllEvent } from "@/types/event.interface"
import { Minus, Plus, Ticket } from "lucide-react"
import { useState } from "react"

export default function EventBooking({eventInfo}: {eventInfo:IAllEvent}) {
    const [guestCount, setGuestCount] = useState(1) 
    const fee = 0
  return (
    <div className="bg-white shadow-lg px-5 py-10 rounded-lg border space-y-5">
        <div className="flex items-center gap-3">
            <Ticket className="text-[#DC143C]"/>
            <h1 className="text-xl font-bold">Select No Of Perticipents</h1>
        </div>

        <div className="flex justify-between gap-3">
            <div>
                <h1 className="text-md font-bold">General Fee</h1>
                <p className="text-muted-foreground text-sm">${eventInfo?.joining_fee} / person</p>
            </div>

            <div className="flex items-center gap-5">
                <Button onClick={()=>setGuestCount(guestCount-1)} disabled={guestCount<=1} className="" variant={"outline"}><Minus/></Button>
                <p>{guestCount}</p>
                <Button onClick={()=>setGuestCount(guestCount+1)} variant={"outline"}><Plus/></Button>
            </div>
        </div>

        <hr />

        <div className="space-y-2">
            <div className="flex justify-between">
                <h1>Subtotal</h1>
                <h1>${(eventInfo?.joining_fee)*guestCount}</h1>
            </div>
            <div className="flex justify-between">
                <h1>Fees</h1>
                <h1>{fee}</h1>
            </div>
            <div className="flex justify-between">
                <h1 className="text-lg font-bold">Total</h1>
                <h1>${((eventInfo?.joining_fee)*guestCount)+fee}</h1>
            </div>
        </div>

        <div >
            <Button className="w-full bg-[#DC143C] text-white cursor-pointer" variant={"outline"}>Book Now</Button>
        </div>


      
    </div>
  )
}
