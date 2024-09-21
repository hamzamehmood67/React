import { useEffect, useState } from "react"
import EventsList from "../components/EventsList"
import axios from "axios"


export default function EventPage(){
    const events=[];

    useEffect(()=>{
         axios.get('http://localhost:8080/events');
    })


    return <h1>EventPage</h1>
}