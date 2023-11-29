import { ReactComponent as CrossSmallIcon } from "../../assets/icons/x-small.svg";
import { Wrapper, Text, Btn } from './CheckedFilter.styled';

const CheckedFilter = ({ text, clickHandler }) => {
  return (
    <Wrapper>
      <Text>{text}</Text>
      <Btn type="button" onClick={clickHandler}>
        <CrossSmallIcon />
      </Btn>
    </Wrapper>
  );
};

export default CheckedFilter;