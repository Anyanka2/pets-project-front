// import { Outlet } from "react-router";


// export default function PrivateRoute () {

//     return (
//         <>
//             <p>Privat page</p>
//             <Outlet/>
//         </>
//     )
// }
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.js';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};