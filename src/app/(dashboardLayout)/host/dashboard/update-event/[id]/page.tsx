
import UpdateEventForm from "@/components/modules/Dashboard/Host/UpdateEventForm";
import { getEventInfo } from "@/services/event/eventManagement";

export default async function UpdateEventPage({params}: {params: {id: string}}) {
    const {id} = await params
    const {data} = await getEventInfo(id)
    
  return (
    <div className="container mx-auto space-y-10">
        <div>
            <h1 className="text-3xl font-bold underline text-[#DC143C]">Update Your Event Information</h1>
        </div>
        <div>
            <UpdateEventForm event={JSON.parse(JSON.stringify(data))}/>
        </div>
    </div>
  );
}
