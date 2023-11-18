import { NotFoundPageContainer, Title, Image } from "./NotFoundPage.styles";
import pageError from "../../images/404/desktop@1x.png";

export const NotFoundPage = () => {
  return (
    <NotFoundPageContainer>
      <Title>Ooops! This page not found :(</Title>
      <Image src={pageError} alt="" />
    </NotFoundPageContainer>
  );
};

export default NotFoundPage;
