import axios from "axios";
import EventForm from "../components/EventForm";
import {  redirect } from "react-router-dom";

export default function NewEventPage(){
    return <EventForm/>
}

export async function action({request, params}){
    const data=await request.formData();
    const eventData={
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description')
    }
    const res=await axios.post('http://localhost:8080/events', 
        eventData,
        {
            headers:{
                'Content-Type' : 'application/json'
            }
        }
    )
    console.log(res);

    return redirect('/events')
}