import {
  NotFoundPageContainer,
  StyledTitle,
  StyledPicture,
  StyledLink,
} from "./NotFoundPage.styles";
import notFoundImageDesktop from "../../assets/images/404/desktop@1x.png";
import notFoundImageDesktopRetina from "../../assets/images/404/desktop@2x.png";
import notFoundImageTablet from "../../assets/images/404/tablet@1x.png";
import notFoundImageTabletRetina from "../../assets/images/404/tablet@2x.png";
import notFoundImageMobile from "../../assets/images/404/mobile@1x.png";
import notFoundImageMobileRetina from "../../assets/images/404/mobile@2x.png";

import pawprintIcon from "../../assets/icons/pawprint.svg";

export const NotFoundPage = () => {
  return (
    <NotFoundPageContainer>
      <StyledTitle>Ooops! This page not found :(</StyledTitle>
      <StyledPicture>
        <source
          media="(max-width: 767px)"
          srcSet={`${notFoundImageMobile} 1x, ${notFoundImageMobileRetina} 2x`}
          type="image/webp"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${notFoundImageTablet} 1x, ${notFoundImageTabletRetina} 2x`}
          type="image/webp"
        />
        <source
          media="(min-width: 1280px)"
          srcSet={`${notFoundImageDesktop} 1x, ${notFoundImageDesktopRetina} 2x`}
          type="image/webp"
        />
        <img src={notFoundImageDesktopRetina} alt="" />
      </StyledPicture>

      <StyledLink to="/main">
        To main page <img src={pawprintIcon} alt="" />
      </StyledLink>
    </NotFoundPageContainer>
  );
};

export default NotFoundPage;
