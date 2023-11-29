import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { AddFormButtonWrapper } from '../PetPageForm/PetPageForm.styled';
import AddFormButtonBack from '../AddFormButton/AddFormButtonBack';
import AddFormButtonNext from '../AddFormButton/AddFormButtonNext';
import { ReactComponent as PawPrintIcon } from '../../../assets/icons/pawprint.svg';

import {
  AddFormRadioButton,
  ContainerForInput,
  RadioCategoryLabel,
  CategoryWrapper,
} from './ChooseForm.styled';

const ChooseForm = ({ formData, setFormData, nextStep, cancel }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (!formData.category) setIsDisabled(true);
    else setIsDisabled(false);
  }, [formData.category]);

  const handleCategoryChange = e => {
    const { name, value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <CategoryWrapper>
      <ContainerForInput>
      <AddFormRadioButton
        type="radio"
        name="category"
        value="my-pet"
        id="my-pet"
        onChange={handleCategoryChange}
        checked={formData.category === 'my-pet'}
      />
      <RadioCategoryLabel htmlFor="my-pet">your pet</RadioCategoryLabel>
      <AddFormRadioButton
        type="radio"
        name="category"
        value="sell"
        id="sell"
        checked={formData.category === 'sell'}
        onChange={handleCategoryChange}
      />
      <RadioCategoryLabel htmlFor="sell">sell</RadioCategoryLabel>
      <AddFormRadioButton
        type="radio"
        name="category"
        value="lost/found"
        id="lost/found"
        checked={formData.category === 'lost/found'}
        onChange={handleCategoryChange}
      />
      <RadioCategoryLabel htmlFor="lost/found">lost/found</RadioCategoryLabel>
      <AddFormRadioButton
        type="radio"
        name="category"
        value="in good hands"
        id="in good hands"
        checked={formData.category === 'in good hands'}
        onChange={handleCategoryChange}
      />
      <RadioCategoryLabel htmlFor="in good hands">in good hands</RadioCategoryLabel>
      </ContainerForInput>
      <AddFormButtonWrapper>
        <AddFormButtonNext
          isDisabled={isDisabled}
          type="button"
          text="Next"
          icon={<PawPrintIcon />}
          clickHandler={nextStep}
          filled={false}
        />
        <AddFormButtonBack text="Cancel" isLink={true} path={cancel} />
      </AddFormButtonWrapper>
    </CategoryWrapper>
  );
};

ChooseForm.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  cancel: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired,
  ]),
  nextStep: PropTypes.func.isRequired,
};

export default ChooseForm;