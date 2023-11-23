import { useState } from "react";
import { Formik } from "formik";
import { object, string, number, date, InferType } from "yup";

import UserPhotoDefault from "../../assets/icons/user_photo_default.svg";
import {
  UserProfileContainer,
  UserPhotoBox,
  LogoutBtn,
  UserImg,
  Label,
  SubmitBtn,
  EditImg,
  UserProfileSection,
  StyledForm,
  StyledField,
} from "./UserProfile.styled";

export default function UserProfile() {
  const [editable, setEditable] = useState(false);
  const [anketa, setAnketa] = useState({
    name: "",
    email: "",
    birthday: "",
    phone: "",
    city: "",
  });

  const yupSchema = object().shape({
    name: string().required("Name is required"),
    email: string()
      .email("Invalid email address")
      .required("Email is required"),
    birthday: string(),
    phone: string(),
    city: string(),
  });

  const editHandler = (e) => {
    if (e.target.nodeName === "IMG") {
      return;
    }
    setEditable((pervState) => !pervState);
  };

  const handleLogout = async (e) => {
    console.log("logout");
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
          <Formik
            initialValues={anketa}
            validationSchema={yupSchema}
            onSubmit={(values, actions) => {
              //  setTimeout(() => {
              //    alert(JSON.stringify(values, null, 2));
              //    actions.setSubmitting(false);
              //  }, 1000);
              console.log("this is submit");
              actions.setSubmitting(false)
            }}
          >
            {(props) => (
              <StyledForm onSubmit={props.onSubmit}>
                <Label>
                  Name:
                  <StyledField disabled={!editable} type="text" name="name" />
                </Label>
                <Label>
                  Email:
                  <StyledField disabled={!editable} type="text" name="email" />
                </Label>
                <Label>
                  Birthday:
                  <StyledField disabled={!editable} type="text" name="birthday" />
                </Label>
                <Label>
                  Phone:
                  <StyledField disabled={!editable} type="text" name="phone" />
                </Label>
                <Label>
                  City:
                  <StyledField disabled={!editable} type="text" name="city" />
                </Label>
                {editable ? (
                  <SubmitBtn type="submit">Submit</SubmitBtn>
                ) : (
                  <LogoutBtn type="button" onClick={handleLogout}>
                    Log Out
                  </LogoutBtn>
                )}
              </StyledForm>
            )}
          </Formik>
        </UserProfileContainer>
      </UserProfileSection>
    </>
  );
}
