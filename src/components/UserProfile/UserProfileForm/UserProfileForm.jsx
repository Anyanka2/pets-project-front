import {
    LogoutBtn,
  StyledErrorMessage,
  StyledField,
  StyledForm,
  StyledInputWrapper,
  StyledLabel,
  StyledSubmitBtn,
} from "./UserProfileForm.styles.jsx";
import { ErrorMessage, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import UniversalModal from "../../../shared/components/UniversalModal/UniversalModal.jsx";

export default function UserProfileForm(props) {
  const [userData, setUserData] = useState({
                name: "Ann",
                email: "aaaa@gmail.com",
                birthday: "00.00.0000",
                phone: "+380972548888",
                city: "Kyiv"
        });
  const [isModal, setIsModal] = useState(false);

  const handleLogout = async (e) => {
    // console.log("logout");
    setIsModal(prev => !prev);
  };

  return (
    <>
    <Formik
      initialValues={userData}
      validationSchema={Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        birthday: Yup.string(),
        phone: Yup.string(),
        city: Yup.string(),
      })}
      onSubmit={(values) => {
        console.log(values);
        setUserData({
            name: "Ann",
            email: "aaaa@gmail.com",
            birthday: "00.00.0000",
            phone: "+380972548888",
            city: "Kyiv"
          });
      }}
    >
      <StyledForm>
        <StyledLabel htmlFor="name">
          <div>Name:</div>
          <StyledInputWrapper>
            <StyledField
              id="name"
              type="text"
              name="name"
              disabled={!props.editable}
            />
            <StyledErrorMessage>
              <ErrorMessage name="name" />
            </StyledErrorMessage>
          </StyledInputWrapper>
        </StyledLabel>
        <StyledLabel htmlFor="email">
          <div>Email:</div>
          <StyledInputWrapper>
            <StyledField
              id="email"
              type="text"
              name="email"
              disabled={!props.editable}
            />
            <StyledErrorMessage>
              <ErrorMessage name="email" />
            </StyledErrorMessage>
          </StyledInputWrapper>
        </StyledLabel>
        <StyledLabel htmlFor="birthday">
          <div>Birthday:</div>
          <StyledInputWrapper>
            <StyledField
              id="birthday"
              type="text"
              name="birthday"
              disabled={!props.editable}
            />
            <StyledErrorMessage>
              <ErrorMessage name="birthday" />
            </StyledErrorMessage>
          </StyledInputWrapper>
        </StyledLabel>
        <StyledLabel htmlFor="phone">
          <div>Phone:</div>
          <StyledInputWrapper>
            <StyledField
              id="phone"
              type="text"
              name="phone"
              disabled={!props.editable}
            />
            <StyledErrorMessage>
              <ErrorMessage name="phone" />
            </StyledErrorMessage>
          </StyledInputWrapper>
        </StyledLabel>
        <StyledLabel htmlFor="city">
          <div>City:</div>
          <StyledInputWrapper>
            <StyledField
              id="city"
              type="text"
              name="city"
              disabled={!props.editable}
            />
            <StyledErrorMessage>
              <ErrorMessage name="city" />
            </StyledErrorMessage>
          </StyledInputWrapper>
        </StyledLabel>
        { props.editable ? 
            <StyledSubmitBtn type="submit">Save</StyledSubmitBtn> :
            <LogoutBtn type="button" onClick={handleLogout}>Log Out</LogoutBtn>
        }
      </StyledForm>
    </Formik>
     <UniversalModal isModalOpen={isModal} evt="logout" onClick={handleLogout} >
      
     </UniversalModal>
    </>
  );
}
