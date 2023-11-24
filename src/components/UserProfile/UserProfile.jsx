import { useState } from "react";

import UserPhotoDefault from "../../assets/icons/user_photo_default.svg";
import {
  UserProfileContainer,
  UserPhotoBox,
  UserImg,
  EditImg,
  UserProfileSection,
} from "./UserProfile.styled";
import UserProfileForm from "./UserProfileForm/UserProfileForm";

export default function UserProfile() {
  const [editable, setEditable] = useState(false);

  

  const editHandler = (e) => {
    if (e.target.nodeName === "IMG") {
      return;
    }
    setEditable((pervState) => !pervState);
  };

  

  return (
    <>
      <UserProfileSection>
        <h2>My information:</h2>
        <UserProfileContainer>
          <UserPhotoBox onClick={editHandler}>
            <UserImg src={UserPhotoDefault} alt="User profile" />
            {editable ? <EditImg>Edit photo</EditImg> : ""}
          </UserPhotoBox>
          <UserProfileForm editable={editable} />
        </UserProfileContainer>
      </UserProfileSection>
    </>
  );
}
