import {
  Modal,
  TitleText,
  CancelButton,
  LogoutButton,
  LogoutButtonText,
  LogoutIconSVG,
  ButtonContainer,
  
} from "./ModalAlreadyLeaving.styled";

// import LogoutIcon from "../../../assets/icons/logout.svg";
import { ReactComponent as LogoutIcon  } from "../../../assets/icons/logout.svg";

export const ModalAlreaadyLeaving = () => {
    return (
        <>
            <Modal>
                <TitleText>Already leaving?</TitleText>
                <ButtonContainer>
                    <CancelButton>Cancel</CancelButton>
                    <LogoutButton>
                        <LogoutButtonText>Yes</LogoutButtonText>
                        <LogoutIconSVG>
                            <LogoutIcon />
                        </LogoutIconSVG>
                    </LogoutButton>
                </ButtonContainer>

            </Modal>
        </>
    )
}