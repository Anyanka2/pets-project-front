import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';



import { useSelector } from 'react-redux';

const PrivateRoute = () => {
 const { token } = useSelector((state) => state.auth);
 
  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;