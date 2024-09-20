import { Outlet } from "react-router-dom";

export default function Admin(){
    return <div>
        Admin Dashboard
        <br></br>
        <Outlet/>
    </div>
}