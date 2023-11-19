import LoaderImg from '../../images/loader/loader.gif';
import { Loading, ImgLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <Loading>
      <ImgLoader src={LoaderImg} alt="Loading....." />
    </Loading>
  );
};