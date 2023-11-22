import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from '../redux/auth/selectors';
import {Loader} from '../components/Loader/Loader';

const PublicRoute = () => {
  const { isLoggedIn, token } = useSelector(selectAuth);

  if (!isLoggedIn && token) {
    return <Loader />;
  }

  if (isLoggedIn && token) {
    return <Navigate to="/user" />;
  }
  return <Outlet />;
};

export default PublicRoute;