import styled from "styled-components";

import bgTab from "../../images/backgroundImg/bg-tablet@1x.png";
import bgTabRetina from "../../images/backgroundImg/bg-tablet@2x.png";
import bgDesk from "../../images/backgroundImg/bg-desktop@1x.png";
import bgDeskRetina from "../../images/backgroundImg/bg-desktop@2x.png";

export const BackgroundImg = styled.div`
  min-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 -100px;
  background-image: url(${bgTab});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgTabRetina});
  }

  @media only screen and (min-width: 768px) {
    background-position: -50px -100px;
  }

  @media only screen and (min-width: 1280px) {
    background-size: contain;
    background-position: center -50px;
    background-image: url(${bgDesk});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgDeskRetina});
    }
  }
`;
