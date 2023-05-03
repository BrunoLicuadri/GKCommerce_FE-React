import { Outlet } from "react-router-dom";
import HeaderClient from "../../Components/HeaderClient";

export default function ClientHome(){
    return(
        <>
        <HeaderClient/>
        <Outlet/>
        </>
    );
}