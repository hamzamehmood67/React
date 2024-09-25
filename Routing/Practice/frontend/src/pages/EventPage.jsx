import { useEffect, useState } from "react"
import EventsList from "../components/EventsList"
import axios from "axios"


export default function EventPage(){
  const [events, setEvents] = useState([]);
  console.log("Rendering")
    useEffect(()=>{
         axios.get('http://localhost:8080/events').then((res)=>{
          console.log(res.data.events)
          setEvents(res.data.events)
         
         });
    }, [])
    
    return <EventsList events={events}/>
}