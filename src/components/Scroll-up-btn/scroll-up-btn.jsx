import ScrollToTop from 'react-scroll-up';
import { ContainerScroll, IconContainet } from './Scroll-up-btn.styled';
import { ReactComponent as Icon } from '../../assets/icons/circle-up.svg';

const ScrollToTopButton = () => {
  return (
    <div>
      <ScrollToTop showUnder={16}>
        <ContainerScroll>
            <IconContainet>
          <Icon
            iconName={'icon-arrow-left'}
            width={'42px'}
            height={'42px'}
          />
          </IconContainet>
        </ContainerScroll>
      </ScrollToTop>
    </div>
  );
};

export default ScrollToTopButton;