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
import { ModalAlreaadyLeaving } from "../ModalAlreadyLeaving/ModalAlreadyLeaving.jsx";
import { useDispatch, useSelector } from "react-redux";
import { userInfo } from "../../../redux/auth/selectors";
import { getCurrentUser, updateCurrentUser } from "../../../redux/auth/operation.js";

export default function UserProfileForm(props) {
  const currentUserInfo = useSelector(userInfo);

  const [isModal, setIsModal] = useState(false);
  const initialValues = {
    name: currentUserInfo.name,
    email: currentUserInfo.email,
    birthday: currentUserInfo.birthday,
    phone: currentUserInfo.phone,
    city: currentUserInfo.city,
  };

  const modalHandler = () => {
    setIsModal((prev) => !prev);
  };

  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      const response = await dispatch(updateCurrentUser(values));
      await dispatch(getCurrentUser());
      console.log(response);
      props.editHandler((prev) => !prev);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          birthday: Yup.string(),
          phone: Yup.string(),
          city: Yup.string(),
        })}
        onSubmit={handleSubmit}
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
          {props.editable ? (
            <StyledSubmitBtn type="submit">Save</StyledSubmitBtn>
          ) : (
            <LogoutBtn type="button" onClick={modalHandler}>
              Log Out
            </LogoutBtn>
          )}
        </StyledForm>
      </Formik>
      <UniversalModal isModalOpen={isModal} onClick={modalHandler}>
        <ModalAlreaadyLeaving />
      </UniversalModal>
    </>
  );
}
