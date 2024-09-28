import axios from "axios";
import EventItem from "../components/EventItem";
import { useLoaderData } from "react-router-dom";


export default function EventDetailPage(){
    const data=useLoaderData();

    return <EventItem event={data} />
}

export async function  loader({request, params}){

    const id=params.eventId;
    const res= await axios.get('http://localhost:8080/events/' +id);
    if(res.statusText!=='OK')
    {
        throw {message: "An Error Occured"}
    }
    console.log(res)
    return res;
}
