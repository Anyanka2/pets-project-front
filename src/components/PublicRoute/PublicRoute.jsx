import { Outlet } from "react-router";


export default function PublicRoute () {

    return (
        <>
            <p>Public page</p>
            <Outlet/>
        </>
    )
}