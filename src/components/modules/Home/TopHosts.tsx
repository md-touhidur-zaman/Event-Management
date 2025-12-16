import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

const TopHosts = () => {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold">Top Hosts</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <Card
          className="max-w-dvw border-2 shadow-2xl"
        >
          <CardContent className="flex flex-col justify-center items-center">

            <div className="w-28 h-28 border-2 border-white shadow-2xl rounded-full flex justify-center items-center">
                <Image className="rounded-full" src="/assets/images/host1.png" alt="host1" width={100} height={100}/>
            </div>

            <div className="text-center space-y-2">
                <h1 className="text-xl font-bold">Sarah Jenkins</h1>
                <p className="text-[#DC143C]">Yoga Instructor</p>
                <div className="flex justify-between gap-5">
                    <p className="flex items-center gap-2"><Star className="text-yellow-400"/> 4.9</p>
                    <p className="font-bold"> 115 Events</p>
                </div>



            </div>

            
          </CardContent>
        </Card>

        <Card
          className="max-w-dvw border-2 shadow-2xl"
        >
          <CardContent className="flex flex-col justify-center items-center">

            <div className="w-28 h-28 border-2 border-white shadow-2xl rounded-full flex justify-center items-center">
                <Image className="rounded-full" src="/assets/images/host2.png" alt="host1" width={100} height={100}/>
            </div>

            <div className="text-center space-y-2">
                <h1 className="text-xl font-bold">TechStars Inc.</h1>
                <p className="text-[#DC143C]">Tech Organizer</p>
                <div className="flex justify-between gap-5">
                    <p className="flex items-center gap-2"><Star className="text-yellow-400"/> 4.8</p>
                    <p className="font-bold"> 89 Events</p>
                </div>



            </div>

            
          </CardContent>
        </Card>

        <Card
          className="max-w-dvw border-2 shadow-2xl"
        >
          <CardContent className="flex flex-col justify-center items-center">

            <div className="w-28 h-28 border-2 border-white shadow-2xl rounded-full flex justify-center items-center">
                <Image className="rounded-full" src="/assets/images/host3.png" alt="host1" width={100} height={100}/>
            </div>

            <div className="text-center space-y-2">
                <h1 className="text-xl font-bold">Marcus Chen</h1>
                <p className="text-[#DC143C]">Music Producer</p>
                <div className="flex justify-between gap-5">
                    <p className="flex items-center gap-2"><Star className="text-yellow-400"/> 5</p>
                    <p className="font-bold"> 56 Events</p>
                </div>



            </div>

            
          </CardContent>
        </Card>


        <Card
          className="max-w-dvw border-2 shadow-2xl"
        >
          <CardContent className="flex flex-col justify-center items-center">

            <div className="w-28 h-28 border-2 border-white shadow-2xl rounded-full flex justify-center items-center">
                <Image className="rounded-full" src="/assets/images/host4.png" alt="host1" width={100} height={100}/>
            </div>

            <div className="text-center space-y-2">
                <h1 className="text-xl font-bold">Art Collective</h1>
                <p className="text-[#DC143C]">Gallery Owner</p>
                <div className="flex justify-between gap-5">
                    <p className="flex items-center gap-2"><Star className="text-yellow-400"/> 4.7</p>
                    <p className="font-bold"> 210 Events</p>
                </div>



            </div>

            
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TopHosts;
