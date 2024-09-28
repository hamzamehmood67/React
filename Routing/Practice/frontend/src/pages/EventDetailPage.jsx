import axios from "axios";
import EventItem from "../components/EventItem";
import { redirect, useRouteLoaderData } from "react-router-dom";


export default function EventDetailPage(){
    const data=useRouteLoaderData('event-detail');
    return <EventItem event={data.event} />
}

export async function  loader({request, params}){

    const id=params.eventId;
    const res= await axios.get('http://localhost:8080/events/' +id);
    if(res.statusText!=='OK')
    {
        throw {message: "An Error Occured"}
    }
    return res.data;
}


export async function action({request, params}) {
    const id=params.eventId
    const res=await axios({
        method: request.method, 
        url: 'http://localhost:8080/events/'+id
    })
    console.log(res);
    return redirect('/events');
}