import {
  CloseButton,
  CloseIconSVG,
  Modal,
  TitleText,
  CancelButton,
  LogoutButton,
  LogoutButtonText,
  LogoutIconSVG,
} from "./ModalAlreadyLeaving.styled";

import CloseIcon from "../../../assets/icons/cross-small-blue.svg";
// import LogoutIcon from "../../../assets/icons/logout.svg";

export const ModalAlreaadyLeaving = () => {
    return (
        <>
            <CloseButton>
                <CloseIconSVG src={CloseIcon} />
            </CloseButton>

            <Modal>
                <TitleText>Already leaving?</TitleText>
                <CancelButton>Cancel</CancelButton>
                <LogoutButton>
                    <LogoutButtonText>Yes</LogoutButtonText>
                    <LogoutIconSVG />
                </LogoutButton>
            </Modal>
        </>
    )
}