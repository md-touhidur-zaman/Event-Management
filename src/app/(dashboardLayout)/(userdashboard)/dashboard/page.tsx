import { Button } from "@/components/ui/button";
import { userStatsInfo } from "@/services/stats/stats.services";
import { Calendar } from "lucide-react";
import Link from "next/link";

export default async function UserDashboardPage() {
  const { data } = await userStatsInfo();

  return (
    <div className="container mx-auto mt-10 p-2 md:p-0">
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome to your dashboard</p>
        </div>
        <div>
          <Link href={"/explore-events"}><Button className="bg-[#DC143C] text-white cursor-pointer" variant={"outline"}>Explore Events</Button></Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mt-10 ">
        <div className="flex items-center justify-between border-2 p-10 rounded-lg">
          <div>
            <h1 className=" font-bold text-xl">
              Total Events You Participates
            </h1>
            <p className="text-8xl font-bold text-muted-foreground">
              {data.totalParticipatesInEvent}
            </p>
          </div>
          <div>
            <div className="w-10 h-10 rounded-full flex justify-center items-center bg-pink-200">
              <Calendar className="text-[#DC143C]" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-2 p-10 rounded-lg">
          <div>
            <h1 className=" font-bold text-xl">Upcoming Events</h1>
            <p className="text-8xl font-bold text-muted-foreground">
              {data.upcomingEventCount}
            </p>
          </div>
          <div>
            <div className="w-10 h-10 rounded-full flex justify-center items-center bg-pink-200">
              <Calendar className="text-[#DC143C]" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-2 p-10 rounded-lg">
          <div>
            <h1 className=" font-bold text-xl">Total Past Events</h1>
            <p className="text-8xl font-bold text-muted-foreground">
              {data.pastEventCount}
            </p>
          </div>
          <div>
            <div className="w-10 h-10 rounded-full flex justify-center items-center bg-pink-200">
              <Calendar className="text-[#DC143C]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
