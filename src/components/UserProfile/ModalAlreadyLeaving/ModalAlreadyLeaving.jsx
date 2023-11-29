import {
  Modal,
  TitleText,
  CancelButton,
  LogoutButton,
  LogoutButtonText,
  ButtonContainer,
  CustomSvgModalLogOut,
} from "./ModalAlreadyLeaving.styled";

import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../redux/auth/operation";
import { userInfo } from "../../../redux/auth/selectors";
import { Backdrop } from "../../Notices/NoticeModals/NoticeModal.styled";

export const ModalAlreaadyLeaving = ({ logOutUser }) => {
  const dispatch = useDispatch();
  const { _id } = useSelector(userInfo);

  const alreadyLogout = () => {
    dispatch(logOut(_id));

    logOutUser();
  };
  return (
    <>
      <Backdrop>
        <Modal>
          <TitleText>Already leaving?</TitleText>
          <ButtonContainer>
            <CancelButton onClick={logOutUser}>Cancel</CancelButton>
            <LogoutButton>
              <LogoutButtonText onClick={alreadyLogout}>
                Yes
                <CustomSvgModalLogOut>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4M3 12h12M3 12l4-4m-4 4 4 4"
                    />
                  </svg>
                </CustomSvgModalLogOut>
              </LogoutButtonText>
            </LogoutButton>
          </ButtonContainer>
        </Modal>
      </Backdrop>
    </>
  );
};
