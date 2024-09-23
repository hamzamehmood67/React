import { useEffect, useState } from "react"

import axios from "axios"


export default function EventPage(){
    const events=[];

    useEffect(()=>{
         axios.get('http://localhost:8080/events');
    })


    return <h1>EventPage</h1>
}