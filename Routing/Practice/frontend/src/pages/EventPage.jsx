import { useEffect, useState } from "react"
import EventsList from "../components/EventsList"
import axios from "axios"


export default function EventPage(){
    let events=[];

    useEffect(()=>{
         axios.get('http://localhost:8080/events').then((res)=>{
           events=res.data;
         });
    })

    return <EventsList events={events}/>
}