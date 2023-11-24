import ScrollToTop from "react-scroll-up";
import { ContainerScroll, IconContainer } from "./ScrollUpBtn.styled";
import { ReactComponent as Icon } from "../../assets/icons/circle-up.svg";

const ScrollToTopButton = () => {
  return (
    <div>
      <ScrollToTop showUnder={16}>
        <ContainerScroll>
          <IconContainer>
            <Icon iconName={"icon-arrow-left"} width={"42px"} height={"42px"} />
          </IconContainer>
        </ContainerScroll>
      </ScrollToTop>
    </div>
  );
};

export default ScrollToTopButton;
