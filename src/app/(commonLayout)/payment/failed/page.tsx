import { Button } from "@/components/ui/button";
import { Ban} from "lucide-react";
import Link from "next/link";

export default function FailedPage() {
  return (
    <div className='min-h-screen flex justify-center items-center p-2 md:p-0'>
        <div className="shadow-lg shadow-red-400 border border-red-500 rounded-lg flex flex-col items-center p-10 space-y-3">
            <div className="w-32 h-32 rounded-full p-2 border flex justify-center items-center bg-red-400 shadow-2xl shadow-red-400">
                <Ban className="text-red-950" size={60}/>
            </div>
            <div className="flex flex-col items-center space-y-3">
                <h1 className="text-2xl text-red-700 font-bold flex gap-2">Payment Procedure Failed <Ban/></h1>
                <p className="text-center text-muted-foreground">Your payment has been Failed.<br /> To make payment again please go to your event page.</p>
                <Link href={"/dashboard/my-events"}>
                <Button variant={"outline"}  className="w-full bg-red-400 cursor-pointer">Back to your events</Button>
                </Link>
            </div>

        </div>
    </div>
  )
}
