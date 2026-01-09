import AllEventCard from "@/components/modules/Dashboard/Admin/AllEventCard";
import SearchBar from "@/components/modules/Dashboard/Host/SearchBar";
import Pagination from "@/components/shared/Pagination";
import { getAllEventInfo } from "@/services/event/eventManagement";
import { IAdminEvent } from "@/types/admin.interface";

interface searchParamsProps{
  searchParams: {
    searchTerm?: string,
    status?:string,
    sortBy?: string,
    page?:string
  }
}
export default async function AllEventsPage({searchParams}: searchParamsProps) {
    const params = await searchParams

    const {data} = await getAllEventInfo(params)
    const allEventsInfo = data?.events
    const totalEvents = data?.totalEvents
    const totalPage = Math.ceil(totalEvents/3)
    

  return (
    <div className="container mx-auto my-10 space-y-5">
        <div className="space-y-2">
            <h1 className="text-3xl font-bold">All Events</h1>
            <p className="text-muted-foreground">Here&apos;s have all events to review you</p>
        </div>

        <div>
            <SearchBar/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                allEventsInfo && allEventsInfo?.map((event: IAdminEvent)=><AllEventCard key={event._id} event={event}/>)
            }

        </div>

        <div>
            <Pagination totalPage={totalPage}/>
        </div>


      
    </div>
  )
}
