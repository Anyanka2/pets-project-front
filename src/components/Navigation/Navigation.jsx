import { NavigationContainer } from '../Navigation/Navigation.styled';
import { NavLink } from 'react-router-dom'; 


const Navigation = () => {
  return (
    <NavigationContainer>
      <NavLink to="news">
        News
      </NavLink>
      <NavLink to="/">
        Find Pet
      </NavLink>
      <NavLink to="friends">
        Our Friends
      </NavLink>
    </NavigationContainer>
  );
};

export default Navigation;