import { Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';



const PublicRoute = () => {
  const {token } = useSelector(state => state.auth);

  

  if (!token) {
     return <Outlet />;
  }
  
  
};

export default PublicRoute;