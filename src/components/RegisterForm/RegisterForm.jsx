import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import { Formik } from 'formik';


import { ReactComponent as OpenEyeIcon } from '../../icons/eye-open.svg';
import { ReactComponent as CloseEyeIcon } from '../../icons/eye-closed.svg';
import { ReactComponent as CrossIcon } from '../../icons/cross-small.svg';
import { ReactComponent as CheckIcon } from '../../icons/check.svg';

import {
  RegisterFormEl,
  RegisterFormTitle,
  RegisterFormUsernameContainer,
  RegisterFormUsernameInputContainer,
  RegisterFormEmailContainer,
  RegisterFormEmailInputContainer,
  RegisterFormInput,
  RegisterFormPasswordContainer,
  RegisterFormPasswordInputContainer,
  ErrorMessage,
  PasswordIcon,
  RegisterBtn,
  EyeIcon,
  ErrorIcon,
  CheckMarkIcon,
  InfoMessage,
  RegisterErrorMessage,
  LoginText,
  LoginLink,
} from './RegisterForm.styled';

const initialValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const fieldValidation = values => {
  const errors = {};

  if (!values.username) {
    errors.username = 'This field is required';
  } else if (/^\s+$/.test(values.username)) {
    errors.username = 'Username cannot be empty';
  } else if (values.username.length < 2) {
    errors.username = 'Username must be at least 2 characters long';
  }  

  if (!values.email) {
    errors.email = 'This field is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Enter a valid Email';
  }

  if (!values.password) {
    errors.password = 'This field is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters long';
  } else if (!/[A-Za-z]/.test(values.password)) {
    errors.password = 'Password must contain at least one letter';
  } else if (!/\d/.test(values.password)) {
    errors.password = 'Password must contain at least one digit';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'This field is required';
  } else if (values.confirmPassword.length < 8) {
    errors.confirmPassword = 'Password must be at least 8 characters long';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
};

const RegisterForm = () => {
//   const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailAvailable, setEmailAvailable] = useState(true);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(prevState => !prevState);
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    if (loading) {
      return;
    }

    setLoading(true);
    const credentials = {
      email: values.email,
      password: values.password,
      username: values.username,
    };

    try {

        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
    
        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            navigate('/');
          } else {
            console.error('Ошибка входа:', data.error);
          }
        } else {
          console.error('Ошибка HTTP:', response.statusText);
        }
      } catch (error) {
        console.error('Ошибка:', error);
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

        if (!values.password) {
            errors.password = 'This field is required';
          } else if (values.password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
          } else if (!/[A-Za-z]/.test(values.password)) {
            errors.password = 'Password must contain at least one letter';
          } else if (!/\d/.test(values.password)) {
            errors.password = 'Password must contain at least one digit';
          }

        const isPasswordValid = values.password && values.password.length >= 8 && /[A-Za-z]/.test(values.password) && /\d/.test(values.password);
        const isPasswordMatch = values.password && values.password === values.confirmPassword;
        const isUsernameValid = values.username && values.username.length >= 2;
        const isEmailValid = values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email);
        const handleFieldChange = e => {
          const { name } = e.target;
          setErrors({ ...errors, [name]: '' });
          handleChange(e);
        };

        return (
          <RegisterFormEl onSubmit={handleSubmit}>
            <RegisterFormTitle>Registration</RegisterFormTitle>
            <RegisterFormUsernameContainer
              error={errors.username && touched.username}
              secure={isUsernameValid}
            >
              <RegisterFormUsernameInputContainer
                error={errors.username && touched.username}
                secure={isUsernameValid}
                style={{
                  borderColor:
                    errors.username && touched.username ? '#F43F5E' : '#54ADFF',
                }}
              >
                <RegisterFormInput
                  type="string"
                  name="username"
                  placeholder="Username"
                  value={values.username}
                  onChange={handleFieldChange}
                  onBlur={handleBlur}
                  disabled={loading}
                />
                {isUsernameValid && (
                    <CheckMarkIcon>
                      <CheckIcon />
                    </CheckMarkIcon>
                  )}
                {errors.username && touched.username && values.username && (
                  <ErrorIcon
                    onClick={() => {
                      resetForm({ values: { ...values, username: '' } });
                    }}
                  >
                    <CrossIcon />
                  </ErrorIcon>
                )}
              </RegisterFormUsernameInputContainer>
              {errors.username && touched.username && (
                <ErrorMessage name="username">{errors.username}</ErrorMessage>
              )}
            </RegisterFormUsernameContainer>

            <RegisterFormEmailContainer 
            error={errors.email && touched.email}
            secure={isEmailValid}
            >
              <RegisterFormEmailInputContainer
                error={errors.email && touched.email}
                secure={isEmailValid}
                style={{
                  borderColor:
                    errors.email && touched.email ? '#F43F5E' : '#54ADFF',
                }}
              >
                <RegisterFormInput
                  type="string"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleFieldChange}
                  onBlur={handleBlur}
                  disabled={loading}
                />
                {values.email && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) && (
                    <CheckMarkIcon>
                    <CheckIcon />
                    </CheckMarkIcon>
                )}
                {errors.email && touched.email && values.email && (
                  <ErrorIcon
                    onClick={() => {
                      resetForm({ values: { ...values, email: '' } });
                    }}
                  >
                    <CrossIcon />
                  </ErrorIcon>
                )}
              </RegisterFormEmailInputContainer>

              {errors.email && touched.email && (
                <ErrorMessage name="email">{errors.email}</ErrorMessage>
              )}
            </RegisterFormEmailContainer>

            <RegisterFormPasswordContainer
              error={errors.password && touched.password}
              secure={isPasswordValid}
            >
              <RegisterFormPasswordInputContainer
                error={errors.password && touched.password}
                secure={isPasswordValid}
                style={{
                  borderColor:
                    errors.password && touched.password
                      ? '#F43F5E'
                      : isPasswordValid
                      ? '#00C3AD'
                      : '#54ADFF',
                }}
              >
                <RegisterFormInput
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleFieldChange}
                  onBlur={handleBlur}
                  disabled={loading}
                />
                <PasswordIcon>
                  <EyeIcon
                    onClick={togglePasswordVisibility}
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
                        resetForm({ values: { ...values, password: '' } });
                      }}
                    >
                      <CrossIcon />
                    </ErrorIcon>
                  )}
                </PasswordIcon>
              </RegisterFormPasswordInputContainer>

              {errors.password && touched.password && (
                <ErrorMessage>{errors.password}</ErrorMessage>
              )}
              {isPasswordValid && (
                <InfoMessage valid={isPasswordValid}>
                  Password is secure
                </InfoMessage>
              )}
            </RegisterFormPasswordContainer>

            <RegisterFormPasswordContainer
              error={errors.confirmPassword && touched.confirmPassword}
              secure={isPasswordMatch}
            >
              <RegisterFormPasswordInputContainer
                error={errors.confirmPassword && touched.confirmPassword}
                style={{
                  borderColor:
                    errors.confirmPassword && touched.confirmPassword
                      ? '#F43F5E'
                      : '#54ADFF',
                }}
              >
                <RegisterFormInput
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={values.confirmPassword}
                  onChange={handleFieldChange}
                  onBlur={handleBlur}
                  disabled={loading}
                />
                <PasswordIcon>
                  <EyeIcon
                    onClick={toggleConfirmPasswordVisibility}
                    error={errors.confirmPassword && touched.confirmPassword}
                  >
                    {showConfirmPassword ? <OpenEyeIcon /> : <CloseEyeIcon />}
                  </EyeIcon>
                  {isPasswordMatch && (
                    <CheckMarkIcon>
                      <CheckIcon />
                    </CheckMarkIcon>
                  )}
                  {errors.confirmPassword &&
                    touched.confirmPassword &&
                    values.confirmPassword && (
                      <ErrorIcon
                        onClick={() => {
                          resetForm({
                            values: { ...values, confirmPassword: '' },
                          });
                        }}
                      >
                        <CrossIcon />
                      </ErrorIcon>
                    )}
                </PasswordIcon>
              </RegisterFormPasswordInputContainer>

              {errors.confirmPassword && touched.confirmPassword && (
                <ErrorMessage>{errors.confirmPassword}</ErrorMessage>
              )}
              {isPasswordMatch && (
                <InfoMessage valid={isPasswordMatch}>
                  Passwords match
                </InfoMessage>
              )}
            </RegisterFormPasswordContainer>

            {!emailAvailable && (
              <RegisterErrorMessage>
                This email is already in use. Please, try with another email or
                log in!
              </RegisterErrorMessage>
            )}

            <RegisterBtn type="submit" disabled={isSubmitting}>
              Registration
            </RegisterBtn>
            <LoginText>
              Already have an account?{' '}
              <LoginLink to={'/login'}>Log In</LoginLink>
            </LoginText>
          </RegisterFormEl>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;