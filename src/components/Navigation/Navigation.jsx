import {
  NavigationContainer,
  StylesLink
} from "../Navigation/Navigation.styled";



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
