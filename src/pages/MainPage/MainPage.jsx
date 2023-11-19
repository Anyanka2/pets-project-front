import { StyledPicture, StyledTittle, Wrapper } from "./MainPage.styled";
import mainImgMobile from "../../images/mainPage/main-img-mobile@1x.png";
import mainImgMobileRetina from "../../images/mainPage/main-img-mobile@2x.png";
import mainImgTab from "../../images/mainPage/main-img-tablet@1x.png";
import mainImgTabRetina from "../../images/mainPage/main-img-tablet@2x.png";
import mainImgDesc from "../../images/mainPage/main-img-desktop@1x.png";
import mainImgDescRetina from "../../images/mainPage/main-img-desktop@1x.png";

const MainPage = () => {
  return (
    <Wrapper>
      <StyledTittle>Take good care of your small pets</StyledTittle>
      <StyledPicture>
        <source
          media="(min-width: 1280px)"
          srcSet={`${mainImgDesc} 1x, ${mainImgDescRetina} 2x`}
          type="image/webp"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${mainImgTab} 1x, ${mainImgTabRetina} 2x`}
          type="image/webp"
        />
        <source
          media="(max-width: 767px)"
          srcSet={`${mainImgMobile} 1x, ${mainImgMobileRetina} 2x`}
          type="image/webp"
        />

        <img src={mainImgDescRetina} alt="Pets" width={917} height={670} />
      </StyledPicture>
    </Wrapper>
  );
};

export default MainPage;
