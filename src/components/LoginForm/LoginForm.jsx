import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { Formik } from "formik";

import { getCurrentUser, logIn } from "../../redux/auth/operation";

import { ReactComponent as OpenEyeIcon } from "../../assets/icons/eye-open.svg";
import { ReactComponent as CloseEyeIcon } from "../../assets/icons/eye-closed.svg";
import { ReactComponent as CrossIcon } from "../../assets/icons/cross-small.svg";
import { ReactComponent as CheckIcon } from "../../assets/icons/check.svg";

import {
  CheckMarkIcon,
  InfoMessage,
} from "../RegisterForm/RegisterForm.styled";
import {
  LogInForm,
  LogInFormTitle,
  LogInFormEmailContainer,
  LogInFormEmailInputContainer,
  LogInFormInput,
  ErrorIcon,
  LogInFormPasswordContainer,
  LogInFormPasswordInputContainer,
  ErrorMessage,
  PasswordIcon,
  EyeIcon,
  LogInBtn,
  RegisterText,
  RegisterLink,
} from "./LoginForm.styled";

const initialValues = {
  email: "",
  password: "",
};

const fieldValidation = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "This field is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Enter a valid Email";
  }

  if (!values.password) {
    errors.password = "This field is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  } else if (!/[A-Za-z]/.test(values.password)) {
    errors.password = "Password must contain at least one letter";
  } else if (!/\d/.test(values.password)) {
    errors.password = "Password must contain at least one digit";
  }

  return errors;
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      const response = await dispatch(logIn(values));
      if (!response) {
        navigate("/login");
      } else {
        await dispatch(getCurrentUser());
        
        navigate("/user");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={fieldValidation}
      validateOnChange={false}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        setErrors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        resetForm,
      }) => {
        const isPasswordValid =
          values.password &&
          values.password.length >= 8 &&
          /[A-Za-z]/.test(values.password) &&
          /\d/.test(values.password);

        const handleFieldChange = (e) => {
          const { name } = e.target;
          setErrors({ ...errors, [name]: "" });
          handleChange(e);
        };

        return (
          <LogInForm onSubmit={handleSubmit}>
            <LogInFormTitle>Login</LogInFormTitle>
            <LogInFormEmailContainer error={errors.email && touched.email}>
              <LogInFormEmailInputContainer
                error={errors.email && touched.email}
                style={{
                  borderColor:
                    errors.email && touched.email ? "#F43F5E" : "#54ADFF",
                }}
              >
                <LogInFormInput
                  type="string"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleFieldChange}
                  onBlur={handleBlur}
                  disabled={loading}
                />
                {values.email &&
                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                    values.email
                  ) && (
                    <CheckMarkIcon>
                      <CheckIcon />
                    </CheckMarkIcon>
                  )}
                {errors.email && touched.email && values.email && (
                  <ErrorIcon
                    onClick={() => {
                      resetForm({ values: { ...values, email: "" } });
                    }}
                  >
                    <CrossIcon />
                  </ErrorIcon>
                )}
              </LogInFormEmailInputContainer>

              {errors.email && touched.email && (
                <ErrorMessage name="email">{errors.email}</ErrorMessage>
              )}
            </LogInFormEmailContainer>

            <LogInFormPasswordContainer
              error={errors.password && touched.password}
              secure={isPasswordValid}
            >
              <LogInFormPasswordInputContainer
                error={errors.password && touched.password}
                secure={isPasswordValid}
                style={{
                  borderColor:
                    errors.password && touched.password ? "#F43F5E" : "#54ADFF",
                }}
              >
                <LogInFormInput
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleFieldChange}
                  onBlur={handleBlur}
                  disabled={loading}
                />
                <PasswordIcon onClick={togglePasswordVisibility}>
                  <EyeIcon
                    error={errors.password && touched.password}
                    secure={isPasswordValid}
                  >
                    {showPassword ? <OpenEyeIcon /> : <CloseEyeIcon />}
                  </EyeIcon>
                  {isPasswordValid && (
                    <CheckMarkIcon>
                      <CheckIcon />
                    </CheckMarkIcon>
                  )}
                  {errors.password && touched.password && values.password && (
                    <ErrorIcon
                      onClick={() => {
                        resetForm({ values: { ...values, password: "" } });
                      }}
                    >
                      <CrossIcon />
                    </ErrorIcon>
                  )}
                </PasswordIcon>
              </LogInFormPasswordInputContainer>
              {errors.password && touched.password && (
                <ErrorMessage name="password">{errors.password}</ErrorMessage>
              )}
              {isPasswordValid && (
                <InfoMessage valid={isPasswordValid}>
                  Password is secure
                </InfoMessage>
              )}
            </LogInFormPasswordContainer>

            <LogInBtn type="submit" disabled={isSubmitting || loading}>
              Log In
            </LogInBtn>
            <RegisterText>
              Don't have an account?{" "}
              <RegisterLink to={"/register"}>Register</RegisterLink>
            </RegisterText>
          </LogInForm>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
