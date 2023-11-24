import { useState } from "react";
import crossSmallBlue from "../../assets/icons/cross-small-blue.svg";
import crossSmallRed from "../../assets/icons/cross-small-red.svg";
import greenCheck from "../../assets/icons/check.svg";
import edit from "../../assets/icons/edit.svg";
import UserPhotoDefault from "../../assets/icons/user_photo_default.svg";



import {
  UserProfileContainer,
  UserPhotoBox,
  UserImg,
  EditImg,
  UserProfileSection,
  EditBtn,
  CancelEditBtn,
  Modal
} from "./UserProfile.styled";
import UserProfileForm from "./UserProfileForm/UserProfileForm";

export default function UserProfile() {
  const [editable, setEditable] = useState(false);
  const [isModal, setIsModal] = useState(false);

  

  const editHandler = (e) => {
    
    setEditable((pervState) => !pervState);
  };
const modalHandler = ()=>{
  setIsModal(prev => !prev);
}
  

  return (
    <>
      <UserProfileSection>
        <h2>My information:</h2>
        <UserProfileContainer>
          <UserPhotoBox >
            <UserImg src={UserPhotoDefault} alt="User profile" />
            {editable ?
            <CancelEditBtn onClick={editHandler} >
              <img src={crossSmallBlue} alt="cross small blue" />
            </CancelEditBtn>
            :
            <EditBtn onClick={editHandler}>
              <img src={edit} alt="Pencil" />
            </EditBtn>
          }
            {editable ? <EditImg>Edit photo</EditImg> : ""}
          </UserPhotoBox>
          {isModal? <Modal>Modal<button onClick={modalHandler}>X</button></Modal>: ""}
          <UserProfileForm editable={editable} />
          <button type="button" onClick={modalHandler}>Open modal</button>
        </UserProfileContainer>
      </UserProfileSection>
    </>
  );
}
