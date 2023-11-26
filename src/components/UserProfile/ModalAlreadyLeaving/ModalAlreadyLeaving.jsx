import {
  Modal,
  TitleText,
  CancelButton,
  LogoutButton,
  LogoutButtonText,
  LogoutIconSVG,
} from "./ModalAlreadyLeaving.styled";

// import LogoutIcon from "../../../assets/icons/logout.svg";
import { ReactComponent as LogoutIcon  } from "../../../assets/icons/logout.svg";

export const ModalAlreaadyLeaving = () => {
    return (
        <>
            <Modal>
                <TitleText>Already leaving?</TitleText>
                <CancelButton>Cancel</CancelButton>
                <LogoutButton>
                    <LogoutButtonText>Yes</LogoutButtonText>
                    <LogoutIconSVG>
                        <LogoutIcon />
                    </LogoutIconSVG>
                        
                </LogoutButton>
            </Modal>
        </>
    )
}