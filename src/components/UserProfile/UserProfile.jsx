import { useMemo, useState } from "react";
import crossSmallBlue from "../../assets/icons/cross-small-blue.svg";
// import crossSmallRed from "../../assets/icons/cross-small-red.svg";
// import greenCheck from "../../assets/icons/check.svg";
import edit from "../../assets/icons/edit.svg";
// import UserPhotoDefault from "../../assets/icons/user_photo_default.svg";

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

export default function UserProfile() {
  const [editable, setEditable] = useState(false);
  const [userPhotoUrl, setUserPhotoUrl] = useState("");

  const editHandler = () => {
    setEditable((prevState) => !prevState);
  };

  const infoAboutUser = useSelector(userInfo);

  const memoizedPhotoUrlHandler = useMemo(() => {
    return (url) => {
      setUserPhotoUrl(url);
    };
  }, []);

  const renderUserPhoto = useMemo(() => {
    if (infoAboutUser.avatarURL && userPhotoUrl) {
      return userPhotoUrl;
    } else {
      return infoAboutUser.avatarURL;
    }
  }, [infoAboutUser.avatarURL, userPhotoUrl]);

  return (
    <>
      <UserProfileSection>
        <h2>My information:</h2>
        <UserProfileContainer>
          <UserPhotoBox>
            <UserImg src={renderUserPhoto} alt="User profile" />

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
              <UserProfilePhotoEdit photoUrlHandler={memoizedPhotoUrlHandler} />
            )}
          </UserPhotoBox>

          <UserProfileForm editable={editable} editHandler={editHandler} />
        </UserProfileContainer>
      </UserProfileSection>
    </>
  );
}
