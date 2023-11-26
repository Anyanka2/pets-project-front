import {
  CloseButton,
  CloseIcon,
  Modal,
  TitleText,
  CancelButton,
  LogoutButton,
  LogoutButtonText,
  LogoutIcon,
} from "./ModalAlreadyLeaving.styled";

import { ReactComponent as CloseIcon } from "../../../assets/icons/cross-small-blue.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/icons/logout.svg";

export const ModalAlreaadyLeaving = () => {
    return (
        <>
            <CloseButton>
                <CloseIcon />
            </CloseButton>

            <Modal>
                <TitleText>Already leaving?</TitleText>
                <CancelButton>Cancel</CancelButton>
                <LogoutButton>
                    <LogoutButtonText>Yes</LogoutButtonText>
                    <LogoutIcon />
                </LogoutButton>
            </Modal>
        </>
    )
}