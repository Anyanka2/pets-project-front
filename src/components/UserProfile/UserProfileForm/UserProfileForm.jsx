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
import {  useSelector } from "react-redux";
import {  userInfo } from "../../../redux/auth/selectors";

export default function UserProfileForm(props) {
  
  const  currentUserInfo  = useSelector(userInfo);
  const [userData, setUserData] = useState({
    name: currentUserInfo.name,
    email: currentUserInfo.email,
    birthday: "00.00.0000",
    phone: "+380972548888",
    city: "Kyiv",
  });
  const [isModal, setIsModal] = useState(false);

  const modalHandler = () => {
    setIsModal((prev) => !prev);
  };

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchData = () => {
  //     try {
       
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };

  //     fetchData();
    
  // }, [dispatch]);


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
          // console.log(values);
          setUserData(values);
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
