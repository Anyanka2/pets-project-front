import {
  AttentionForm,
  AttenitonTitle,
  AttentionText,
  CloseButton,
  CloseIconStyle,
} from "./MainAttention.styled";
import pawprint from "../../../../assets/icons/pawprint.svg";
import { ReactComponent as CloseIcon } from "../../../../assets/icons/close.svg";
import {
  ButtonsContainer,
  ImgLogin,
  LinkLogin,
  LinkReg,
} from "./MainAttention.styled";

export const MainAttention = () => {
  return (
    <AttentionForm>
      <AttenitonTitle>Attention</AttenitonTitle>
      <AttentionText>
        We would like to remind you that certain functionality is available only
        to authorized users.If you have an account, please log in with your
        credentials. If you do not already have an account, you must register to
        access these features.
      </AttentionText>
      <ButtonsContainer>
        <LinkLogin to="login">
          LOG IN
          <ImgLogin src={`${pawprint}`} />
        </LinkLogin>
        <LinkReg to="register">Registration</LinkReg>
      </ButtonsContainer>
      <CloseButton type="button">
        <CloseIconStyle>
          <CloseIcon />
        </CloseIconStyle>
      </CloseButton>
    </AttentionForm>
  );
};
