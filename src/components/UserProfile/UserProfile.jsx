import { useState } from "react";
import crossSmallBlue from "../../assets/icons/cross-small-blue.svg";

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
import { useSelector } from "react-redux";
import { userInfo } from "../../redux/auth/selectors.js";
import { useEffect } from "react";

export default function UserProfile() {
  const [editable, setEditable] = useState(false);
  const [userPhotoUrl, setUserPhotoUrl] = useState("");
  const [newAvatarUrl, setNewAvatarUrl] = useState("");

  const editHandler = () => {
    setEditable((prevState) => !prevState);
  };

  const {avatarURL} = useSelector(userInfo);

  const photoUrlHandler = (url) => {
    setUserPhotoUrl(url)
  }

  const newAvatarHandler = (url) => {
    setNewAvatarUrl(url);
  }

  useEffect(()=>{
    if (newAvatarUrl) {
      setUserPhotoUrl(newAvatarUrl);
    } else if (avatarURL){
      setUserPhotoUrl(avatarURL);
    } else {
      setUserPhotoUrl(UserPhotoDefault);
    }
  }, [avatarURL, userPhotoUrl, newAvatarUrl])
 

  return (
    <>
      <UserProfileSection>
        <h3>My information:</h3>
        <UserProfileContainer>
          <UserPhotoBox>
            <UserImg src={userPhotoUrl} alt="User profile" />

            {editable ? (
              <CancelEditBtn onClick={editHandler}>
                <img src={crossSmallBlue} alt="cross small blue" />
              </CancelEditBtn>
            ) : (
              <EditBtn onClick={editHandler}>
                <img src={edit} alt="Pencil" />
              </EditBtn>
            )}

            {editable && (
              <UserProfilePhotoEdit photoUrlHandler={photoUrlHandler} newAvatarHandler={newAvatarHandler} />
            )}
          </UserPhotoBox>

          <UserProfileForm editable={editable} editHandler={editHandler} />
        </UserProfileContainer>
      </UserProfileSection>
    </>
  );
}
