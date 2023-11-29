import { useState, useEffect, useCallback } from 'react';
import { Formik } from 'formik';
import { useLocation } from 'react-router-dom';

import { validatePetSchema } from '../vaidatePet';

import MoreInfo from '../MoreInfoForm/MoreInfoForm';
import ChooseForm from '../ChooseForm/ChooseForm';
import PersonalForm from '../PersonalForm/PersonalForm';

import {
  AddForm,
  AddFormTitle,
  AddFormList,
  AddFormItem,
  AddFormStepName,
  AddFormWrapper,
  FormBackground,
} from './PetPageForm.styled';

const AddPetPageForm = () => {
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    title: '',
    birthday: '',
    type: '',
    location: '',
    comments: '',
    petPhoto: null,
    sex: '',
    price: '',
  });
  const [step, setStep] = useState(0);
  const [title, setTitle] = useState('');
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  const getPageTitle = useCallback(() => {
    if (step < 1) return 'Add pet';

    const titles = {
      'my-pet': 'Add pet',
      'sell': 'Add pet for sale',
      'lost/found': 'Add to lost or found pet',
      'in good hands': 'Add your pet',
      '': 'Add pet',
    };
    return titles[formData.category] || 'Add pet';
  }, [formData.category, step]);

  useEffect(() => {
    setTitle(getPageTitle());
  }, [getPageTitle]);

  const steps = ['Choose option', 'Personal details', 'More info'];

  const setClassName = index => {
    if (index > step) return '';
    if (index < step) return 'completed';
    return 'current';
  };

  const handleNextClick = e => {
    setStep(prevState => prevState + 1);
  };

  const handlePrevClick = () => {
    setStep(prevState => prevState - 1);
  };

  return (
    <FormBackground>
      <AddFormWrapper step={step} category={formData.category}>
        <AddFormTitle>{title}</AddFormTitle>
        <AddFormList>
          {steps.map((stepName, index) => (
            <AddFormItem key={index} className={setClassName(index)}>
              <AddFormStepName>{stepName}</AddFormStepName>
            </AddFormItem>
          ))}
        </AddFormList>
        <Formik
          initialValues={formData}
          validationSchema={validatePetSchema}
          validateOnChange={false}
        >
          {() => (
            <AddForm autoComplete="on">
              {step === 0 && (
                <ChooseForm
                  formData={formData}
                  setFormData={setFormData}
                  nextStep={handleNextClick}
                  cancel={backLink}
                />
              )}
              {step === 1 && (
                <PersonalForm
                  formData={formData}
                  setFormData={setFormData}
                  nextStep={handleNextClick}
                  backStep={handlePrevClick}
                />
              )}
              {step === 2 && (
                <MoreInfo
                  formData={formData}
                  setFormData={setFormData}
                  backStep={handlePrevClick}
                />
              )}
            </AddForm>
          )}
        </Formik>
      </AddFormWrapper>
    </FormBackground>
  );
};

export default AddPetPageForm;