import {
  NavigationContainer,
  StylesLink,
} from "../Navigation/Navigation.styled";

/* import { NavLink } from 'react-router-dom';  */

const Navigation = () => {
  return (
    <NavigationContainer>
      <StylesLink to="news">News</StylesLink>
      <StylesLink to="notices">Find Pet</StylesLink>
      <StylesLink to="friends">Our Friends</StylesLink>
    </NavigationContainer>
  );
};

export default Navigation;
