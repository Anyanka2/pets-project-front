import { Outlet } from "react-router";


export default function PublicRoute () {

    return (
        <>
            <p>Public page</p>
            <Outlet/>
        </>
    )
}
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth.js';

// export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
//   const { isLoggedIn } = useAuth();

//   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
// };