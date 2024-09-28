import { useRouteLoaderData } from "react-router-dom";
import EventFrom from "../components/EventForm";

export default function EditEventPage(){
   const data= useRouteLoaderData('event-detail')
    return <EventFrom event={data.event}/>
}