import {
  CloseModalBtn,
  ModalBackdrop,
  ModalBody,
  ModalBox,
} from "./UniversalModal.styled.jsx";
import crossSmallBlue from "../../../assets/icons/cross-small-blue.svg";
import LogoutModalContent from "./LogoutModalContent.jsx";
import CongratsModalContent from "./CongratsModalContent.jsx";
import { useEffect, useState } from "react";
export default function UniversalModal(props) {

const [targetComponetn, setTargetComponent ] = useState();


useEffect(()=>{
    switch (props.evt) {
        case "logout":
            setTargetComponent(<LogoutModalContent />);
          break;
        case "congrats":
            setTargetComponent(<CongratsModalContent />);
          break;
        default:
            break;
    }
    
}, [props.evt])

  return (
    <>
      {props.isModalOpen ? (
        <ModalBackdrop>
          <ModalBox>
            <ModalBody >
                
                {targetComponetn}
            </ModalBody>
            <CloseModalBtn onClick={props.onClick}>
              <img src={crossSmallBlue} alt="close button" />
            </CloseModalBtn>
          </ModalBox>
        </ModalBackdrop>
      ) : (
        ""
      )}
    </>
  );
}
