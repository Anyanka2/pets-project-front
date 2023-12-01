import React, { useState } from "react";
import {
  HiddenInputFile,
  ImgAcceptBox,
  ImgBtnAccept,
  ImgBtnDecline,
  LableForHiddenInput,
} from "./UserProfilePhotoEdit.styled.jsx";
import { useDispatch } from "react-redux";
import { uploadImg } from "../../../redux/auth/operation.js";

export default function UserProfilePhotoEdit(props) {
  const [openDownload, setOpenDownload] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const openPhotoHandler = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const obj = URL.createObjectURL(file);
      props.newAvatarHandler(obj);
      setOpenDownload(true);
    }
  };

  const handleDecline = () => {
    setOpenDownload(false);
    props.photoUrlHandler("");
    setSelectedFile(null); // Clear selected file
  };

  const dispatch = useDispatch();

  const handleAccept = async () => {
    if (selectedFile) {
      try {
        const response = await dispatch(uploadImg(selectedFile));
        props.newAvatarHandler(response.payload.avatarURL);
        setOpenDownload(false);
        setSelectedFile(null); // Clear selected file
      } catch (error) {
        console.error("Error occurred while uploading image:", error);
        // Handle error, show message to the user, etc.
      }
    }
  };

  return (
    <>
      {openDownload ? (
        <ImgAcceptBox>
          <ImgBtnAccept type="button" onClick={handleAccept} />
          <p>Confirm</p>
          <ImgBtnDecline type="button" onClick={handleDecline} />
        </ImgAcceptBox>
      ) : (
        <LableForHiddenInput htmlFor="hiddenInputFile">
          <p>Edit photo</p>
          <HiddenInputFile
            type="file"
            name="user_avatar"
            id="hiddenInputFile"
            accept="image/*"
            onChange={openPhotoHandler}
          />
        </LableForHiddenInput>
      )}
    </>
  );
}
