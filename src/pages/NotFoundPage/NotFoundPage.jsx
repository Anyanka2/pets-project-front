import {
  NotFoundPageContainer,
  Title,
  Image,
  StyledLink,
} from "./NotFoundPage.styles";
import notFoundImage from "../../assets/images/404/desktop@1x.png";
import pawprintIcon from "../../assets/icons/pawprint.svg";

export const NotFoundPage = () => {
  return (
    <NotFoundPageContainer>
      <Title>Ooops! This page not found :(</Title>
      <Image src={notFoundImage} alt="" />
      <StyledLink to="/main">
        To main page <img src={pawprintIcon} alt="" />
      </StyledLink>
    </NotFoundPageContainer>
  );
};

export default NotFoundPage;
