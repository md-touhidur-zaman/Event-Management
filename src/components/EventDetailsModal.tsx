"use client"

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { IEvent } from "@/types/host.interface";
import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

interface IEventDetailsModalProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  event: IEvent;
}

export default function EventDetailsModal({
  open,
  setOpen,
  event,
}: IEventDetailsModalProps) {
  return (
    <Dialog open={open}>
      <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:hidden">
        <div className="overflow-y-auto p-2">
          <DialogHeader className="contents space-y-5 text-left">
            <div className="relative h-72 ">
              <p className="text-[#DC143C] bg-pink-200 px-3 py-1 rounded-xl z-10 opacity-70 right-3 top-2 absolute">
                {event?.event_status}
              </p>
              <Image
                className="rounded-lg"
                src={event?.image}
                alt={event?.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="text-xl font-bold flex justify-between">
              <h1>{event?.title}</h1>
              <p className="text-[#DC143C]">${event.joining_fee}</p>
            </div>

            <div>
              <p className="text-justify">{event?.description}</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-5">
                <p className="flex items-center gap-2">
                  <Calendar className="text-[#DC143C]" />{" "}
                  {new Date(event?.date).toLocaleDateString()}
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="text-[#DC143C]" />
                  {event?.time}
                </p>
              </div>
              <p className="flex items-center gap-2">
                <MapPin className="text-[#DC143C]" /> {event?.location}
              </p>
            </div>

            <div>
              <p className="text-md font-bold">
                Total Space: {event?.total_participants}
              </p>
              <p className="text-md font-bold">
                Total Bookings: {event?.total_no_of_booking}
              </p>
            </div>
          </DialogHeader>
          <DialogFooter className=" pb-6 sm:justify-end">
            <DialogClose asChild>
              <Button className="cursor-pointer bg-[#DC143C] text-white" onClick={() => setOpen(false)} type="button" variant={"outline"}>
                Okay
              </Button>
            </DialogClose>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
