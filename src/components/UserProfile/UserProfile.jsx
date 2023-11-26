import { useState } from "react";
import crossSmallBlue from "../../assets/icons/cross-small-blue.svg";
// import crossSmallRed from "../../assets/icons/cross-small-red.svg";
// import greenCheck from "../../assets/icons/check.svg";
import edit from "../../assets/icons/edit.svg";
import UserPhotoDefault from "../../assets/icons/user_photo_default.svg";



import {
  UserProfileContainer,
  UserPhotoBox,
  UserImg,
  UserProfileSection,
  EditBtn,
  CancelEditBtn,
} from "./UserProfile.styled";
import UserProfileForm from "./UserProfileForm/UserProfileForm";
import UserProfilePhotoEdit from "./UserProfilePhotoEdit/UserProfilePhotoEdit.jsx";

export default function UserProfile() {
  const [editable, setEditable] = useState(false);
  const [userPhotoUrl, setUserPhotoUrl] = useState("");

  const editHandler = () => {  
    setEditable((pervState) => !pervState);
  };

  const photoUrlHandler = (url) => {
      setUserPhotoUrl(url);
  }

  return (
    <>
    <UserProfileSection>
      <h2>My information:</h2>
      <UserProfileContainer>
        <UserPhotoBox >
          <UserImg src={userPhotoUrl ?
                userPhotoUrl :
                UserPhotoDefault} 
          alt="User profile" />
          
          {editable ?
            <CancelEditBtn onClick={editHandler} >
              <img src={crossSmallBlue} alt="cross small blue" />
            </CancelEditBtn>
          :
            <EditBtn onClick={editHandler}>
              <img src={edit} alt="Pencil" />
            </EditBtn>
          }
          {editable ? 
              <UserProfilePhotoEdit 
                  photoUrlHandler={photoUrlHandler} 
                /> 
          : ""}
        </UserPhotoBox>
        <UserProfileForm editable={editable} />
      </UserProfileContainer>
    </UserProfileSection>
    </>
  );
}
