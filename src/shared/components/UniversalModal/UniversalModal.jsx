import {
  CloseModalBtn,
  ModalBackdrop,
  ModalBody,
  ModalBox,
} from "./UniversalModal.styled.jsx";
import crossSmallBlue from "../../../assets/icons/cross-small-blue.svg";

import { useEffect } from "react";

export default function UniversalModal({ onClick, isModalOpen, children }) {

    useEffect(() => {
      const escapeWatcher = (event) => {
        if (event.code === "Escape") {
          onClick();
        }
      };

      if (isModalOpen) {
        window.addEventListener("keyup", escapeWatcher);
      }

      return () => {
        window.removeEventListener("keyup", escapeWatcher);
      };
    }, [isModalOpen, onClick]);

  return (
    <>
      {isModalOpen ? (
        <ModalBackdrop id="modalBackdrop" onClick={onClick}>
          <ModalBox>
            <ModalBody>{children}</ModalBody>
            <CloseModalBtn onClick={onClick} >
              <img src={crossSmallBlue} alt="close button"  />
            </CloseModalBtn>
          </ModalBox>
        </ModalBackdrop>
      ) : (
        ""
      )}
    </>
  );
}
