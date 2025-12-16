import {
  Card,
  CardContent,
} from "@/components/ui/card"
import Image from "next/image"

import image from "../../../../public/assets/images/featured_event.jpg"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EventCard() {
  return (
    <Card className="max-w-dvw">
      <CardContent className="space-y-3">
        <Image className="rounded-lg" src={image} alt="event card img"/>

        <div className="space-y-3">
          <h1 className="text-xl font-bold">Summer Music Festival</h1>
          <div className="space-y-2 flex justify-between items-center">
            <p className="flex justify-center items-center gap-2"><Calendar className="text-[#DC143C]"/> Aug 15,2026</p>
            <p className="flex justify-center items-center gap-2"><Clock className="text-[#DC143C]"/> 6.30 PM</p>
          </div>
          <p className="flex  items-center gap-2"><MapPin className="text-[#DC143C]"/> Dhaka,Bangladesh</p>
        </div>

        <Button className="w-full border border-[#DC143C] text-[#DC143C]" variant="outline" >Book Now</Button>

       
      </CardContent>
    </Card>
  )
}
