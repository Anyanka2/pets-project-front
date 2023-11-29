import {
  Modal,
  TitleText,
  CongratsText,
  CongratsButton,
  CongratsButtonText,
  
} from "./ModalCongrats.styled";

import { ReactComponent as PawprintIcon  } from "../../../assets/icons/pawprint.svg";

export const ModalCongrats = () => {
    return (
        <>
            <Modal>
                <TitleText>Congrats!</TitleText>
                <CongratsText>Your registration is successful</CongratsText>
                <CongratsButton>
                    <CongratsButtonText>Go to profile</CongratsButtonText>
                    <CongratsIconSVG>
                        <PawprintIcon />
                    </CongratsIconSVG>
                </CongratsButton>
            </Modal>
        </>
    )
}