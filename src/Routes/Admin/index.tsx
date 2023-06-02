import { Outlet } from "react-router-dom";
import HeaderAdmin from "../../Components/HeaderAdmin";

export default function Admin() {

    return (
        <>
            <HeaderAdmin />
            <Outlet />
        </>

    );
}