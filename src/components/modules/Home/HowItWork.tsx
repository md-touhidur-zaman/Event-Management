import { CalendarCheck2, PartyPopper, Search } from "lucide-react";

export default function HowItWork() {
  return (
    <div>
      <div className="space-y-20">
        <div className="space-y-5">
          <h1 className="text-3xl font-bold">How It Works</h1>
          <p className="text-center text-foreground/80">
            Start your journey in three simple steps
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="flex flex-col justify-center items-center relative space-y-10">
            <div className="absolute w-32 h-32 bg-[#DC143C] p-2 rounded-full  blur-xl top-0"></div>
            <div className="w-28 h-28 rounded-full bg-[#DC143C] flex justify-center items-center z-10  animate-pulse ">
              <Search className="text-white " size={45} />
            </div>

            <div className="w-10 h-10 absolute bg-black z-10 rounded-full flex justify-center items-center font-bold border-4 border-white -top-2 right-[40%] animate-bounce">
              <h1 className="text-white">1</h1>
            </div>

            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold">Browse Events</h1>
              <p>
                Explore thousands of events in your area or online. <br />
                Filter by category, date, or popularity.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center relative space-y-10 ">
            <div className="absolute w-32 h-32 bg-[#DC143C] p-2 rounded-full  blur-xl top-0"></div>
            <div className="w-28 h-28 rounded-full bg-[#DC143C] flex justify-center items-center z-10  animate-pulse">
              <CalendarCheck2 className="text-white" size={45} />
            </div>

            <div className="w-10 h-10 absolute bg-black z-10 rounded-full flex justify-center items-center font-bold border-4 border-white -top-2 right-[40%] animate-bounce">
              <h1 className="text-white">2</h1>
            </div>

            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold">Book Your Spot</h1>
              <p>
                Secure your tickets instantly with our seamless  <br />
                checkout process. No hidden fees.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center relative space-y-10">
            <div className="absolute w-32 h-32 bg-[#DC143C] p-2 rounded-full  blur-xl top-0"></div>
            <div className="w-28 h-28 rounded-full bg-[#DC143C] flex justify-center items-center z-10 animate-pulse">
              <PartyPopper className="text-white" size={45} />
            </div>

            <div className="w-10 h-10 absolute bg-black z-10 rounded-full flex justify-center items-center font-bold border-4 border-white -top-2 right-[40%] animate-bounce">
              <h1 className="text-white">3</h1>
            </div>

             <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold">Enjoy the Experience</h1>
              <p>
                Attend the event, meet new people, and create  <br />
                unforgettable memories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
