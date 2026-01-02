"use client"

import { Button } from "@/components/ui/button";
import { Card,  CardContent,  CardFooter, CardHeader } from "@/components/ui/card";
import { IEvent } from "@/types/host.interface";
import { Calendar, Clock, MapPin, Trash, } from "lucide-react";
import Image from "next/image";

export default function AllPublishedEventCard({event}: {event:IEvent}) {
  return (
    <Card>
      <CardHeader className="m-3 h-72 overflow-hidden  relative transform hover:scale-100 ">
        <p className="text-[#DC143C] bg-pink-200 px-3 py-1 rounded-xl z-10 opacity-70 right-3 top-2 absolute">{event?.event_status}</p>
        <Image className=" rounded-lg " style={{objectFit: "cover"}} src={event.image} alt={event.title} fill />
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="text-xl font-bold flex justify-between">
            <h1 >{event?.title}</h1>
            <p className="text-[#DC143C]">${event.joining_fee}</p>
        </div>

        <div className="space-y-3">
            <div className="flex items-center gap-5">
                <p className="flex items-center gap-2"><Calendar className="text-[#DC143C]"/> {new Date(event?.date).toLocaleDateString()}</p>
                <p className="flex items-center gap-2"><Clock className="text-[#DC143C]"/>{event?.time}</p>
            </div>
            <p className="flex items-center gap-2"><MapPin className="text-[#DC143C]"/> {event?.location}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="w-2/3 bg-[#DC143C] text-white cursor-pointer" variant={"outline"}>Edit</Button>
        <Button className="bg-[#DC143C] text-white font-bold cursor-pointer" variant={"outline"}><Trash/></Button>
      </CardFooter>
    </Card>
  );
}
