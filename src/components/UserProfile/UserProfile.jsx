import { useState } from "react";
import { Formik } from "formik";

import UserPhotoDefault from "../../assets/icons/user_photo_default.svg";
import {
  UserProfileContainer,
  UserPhotoBox,
  Form,
  LogoutBtn,
  UserImg,
  Label,
  Input,
  SubmitBtn,
  EditImg,
  UserProfileSection,
} from "./UserProfile.styled";

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
          {editable ? <EditImg>Edit photo</EditImg> : "" }
        </UserPhotoBox>
        <Formik
          initialValues={{
            name: "jared",
            email: "anna00@gmail.com",
            birthday: "11.09.2001",
            phone: +3800000000000,
            city: "Kyiv",
          }}
          onSubmit={(values, actions) => {
            //  setTimeout(() => {
            //    alert(JSON.stringify(values, null, 2));
            //    actions.setSubmitting(false);
            //  }, 1000);
            console.log("this is submit");
          }}
          onChange={(values, actions) => {}}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit}>
              <Label>
                <div>Name:</div>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.name}
                  name="name"
                />
              </Label>
              <Label>
                <div>Email:</div>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.email}
                  name="email"
                />
              </Label>
              <Label>
                <div>Birthday:</div>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.birthday}
                  name="birthday"
                />
              </Label>
              <Label>
                <div>Phone:</div>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.phone}
                  name="phone"
                />
              </Label>
              <Label>
                <div>City:</div>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.city}
                  name="city"
                />
              </Label>
              {props.errors.name && (
                <div id="feedback">{props.errors.name}</div>
              )}
              {editable ? (
                <SubmitBtn type="submit">Submit</SubmitBtn>
              ) : (
                <LogoutBtn type="button">Log Out</LogoutBtn>
              )}
            </Form>
          )}
        </Formik>
      </UserProfileContainer>
    </UserProfileSection>
    </>
  );
}
