import axios  from "axios";
import EventsList from "../components/EventsList"
import { useLoaderData } from "react-router-dom"


export default function EventPage(){
  const events=useLoaderData();
    return <EventsList events={events}/>
}


export async function loader(){
  const res =await axios.get('http://localhost:8080/events');
  if(res.statusText!=="OK")
  {
    throw { message: "Could not fetch data"}
  }
 
  return res.data.events;
}