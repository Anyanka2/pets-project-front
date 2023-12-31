import React, { useState, useEffect } from "react";
import { useNavigate  } from "react-router-dom";
import PropTypes from "prop-types";
import { validateField } from "../vaidatePet";
import { ReactComponent as PlusIcon } from "../../../assets/icons/plus-big.svg";
import { ReactComponent as MaleIcon } from "../../../assets/icons/male.svg";
import { ReactComponent as FemaleIcon } from "../../../assets/icons/female.svg";
import { ReactComponent as PawPrintIcon } from "../../../assets/icons/pawprint.svg";
import {
  AddFormInput,
  AddFormLabel,
  AddFormLabelWrapper,
} from "../PersonalForm/PersonalForm.styled";
import {
  AddFormTextArea,
  AddFormSexWrapper,
  AddFormSexLabelFemale,
  AddFormSexLabelMale,
  ContainerSex,
  AddFormImageWrapper,
  AddFormImageLabel,
  FileInput,
  FirstPartFormWrapper,
  SecondPartFormWrapper,
  MoreInfoFormWrapper,
  AddFormRadioWrapper,
  AddFormTextAreaLabel,
} from "./MoreInfoForm.styled";
import { AddFormRadioButton } from "../ChooseForm/ChooseForm.styled";
import { AddFormButtonWrapper } from "../PetPageForm/PetPageForm.styled";
import AddFormButtonBack from "../AddFormButton/AddFormButtonBack";
import AddFormButtonNext from "../AddFormButton/AddFormButtonNext";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useDispatch } from "react-redux";
import { addMyPet, getCurrentUser } from "../../../redux/auth/operation";
import { addNotices } from "../../../redux/notices/operationsNotices";

const MoreInfo = ({ formData, setFormData, backStep }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [errors, setErrors] = useState({});
  const [collectedData, setCollectedData] = useState({});
  const [imageValue, setImageValue] = useState(null);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  const isPetPhotoFieldValid = Boolean(
    !errors.notice_image && !!formData.notice_image
  );
  const isCommentsFieldValid = Boolean(!errors.comments);
  const isLocationFieldValid = Boolean(!errors.location && !!formData.location);
  const isSexFieldValid = Boolean(!errors.sex && !!formData.sex);
  const isPriceFieldValid = Boolean(!errors.price && !!formData.price);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (formData.category === "sell") {
      setIsDisabled(
        !(
          isPetPhotoFieldValid &&
          isLocationFieldValid &&
          isSexFieldValid &&
          isPriceFieldValid &&
          isCommentsFieldValid
        )
      );
    }
    if (formData.category === "my-pet") {
      setIsDisabled(!(isPetPhotoFieldValid && isCommentsFieldValid));
    } else if (formData.category === "in good hands" || formData.category === "lost/found") {
      setIsDisabled(
        !(
          isPetPhotoFieldValid &&
          isLocationFieldValid &&
          isSexFieldValid &&
          isCommentsFieldValid 
        )
      );
    } else {
      setIsDisabled(
        !(
          isPetPhotoFieldValid &&
          isLocationFieldValid &&
          isSexFieldValid &&
          isPriceFieldValid &&
          isCommentsFieldValid 
        )
      );
    }
  }, [
    errors,
    formData.category,
    isCommentsFieldValid,
    isLocationFieldValid,
    isPetPhotoFieldValid,
    isPriceFieldValid,
    isSexFieldValid,
  ]);

  useEffect(() => {
    setCollectedData((prevData) => ({ ...prevData, ...formData }));
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    const fieldValue = type === "file" ? files[0] : value;

    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));

    if (type === "file") {
      setImageValue(value);
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  const dispatch = useDispatch();

  const submit = async () => {
    if (!collectedData.comments) {
      validateField("comments", formData, setErrors)
      return
    }
    if (collectedData.category === "my-pet") {
        await dispatch(addMyPet(collectedData));
        await dispatch(getCurrentUser());
        navigate("/user");
    } 
    else if (["sell", "lost/found", "in good hands"].includes(collectedData.category)) {
        await dispatch(addNotices(collectedData));
        navigate("/notices");
    }
};

  
  return (
    <>
      <MoreInfoFormWrapper category={formData.category}>
        <FirstPartFormWrapper category={formData.category}>
          {formData.category !== "my-pet" && (
            <AddFormSexWrapper>
              <p>The Sex</p>
              <AddFormRadioWrapper>
                <AddFormRadioButton
                  type="radio"
                  id="female"
                  name="sex"
                  value="female"
                  onChange={handleInputChange}
                  checked={formData.sex === "female"}
                  onBlur={() => validateField("sex", formData, setErrors)}
                />
                <AddFormSexLabelFemale htmlFor="female">
                  <FemaleIcon />
                  <ContainerSex>Female</ContainerSex>
                </AddFormSexLabelFemale>
                <AddFormRadioButton
                  type="radio"
                  id="male"
                  name="sex"
                  value="male"
                  onChange={handleInputChange}
                  checked={formData.sex === "male"}
                  onBlur={() => validateField("sex", formData, setErrors)}
                />
                <AddFormSexLabelMale htmlFor="male">
                  <MaleIcon />
                  <ContainerSex>Male</ContainerSex>
                </AddFormSexLabelMale>
              </AddFormRadioWrapper>
            </AddFormSexWrapper>
          )}
          <AddFormImageLabel htmlFor="pet-image" category={formData.category}>
            {formData.category === "my-pet" || viewportWidth < 768 ? (
              <>
                Load the <br /> pet’s image:
              </>
            ) : (
              "Load the pet’s image:"
            )}
            <AddFormImageWrapper>
              {!formData.notice_image && <PlusIcon width="30" height="30" />}
              {!!formData.notice_image && (
                <img
                  id="image"
                  src={URL.createObjectURL(formData.notice_image)}
                  alt={formData.notice_image.name}
                />
              )}
            </AddFormImageWrapper>
            <FileInput
              type="file"
              id="pet-image"
              name="notice_image"
              accept=".png, .jpg, .jpeg, .webp"
              onChange={handleInputChange}
              value={imageValue}
            />
          </AddFormImageLabel>
        </FirstPartFormWrapper>
        <SecondPartFormWrapper>
          {formData.category !== "my-pet" && (
            <AddFormLabelWrapper>
              <AddFormLabel htmlFor="location">
                Location
                <AddFormInput
                  placeholder="Your location"
                  type="text"
                  name="location"
                  onChange={handleInputChange}
                  value={formData.location}
                  onBlur={() => validateField("location", formData, setErrors)}
                  className={errors.location ? "invalid" : ""}
                />
              </AddFormLabel>
              {!!errors.location && <ErrorMessage message={errors.location} />}
            </AddFormLabelWrapper>
          )}
          {formData.category === "sell" && (
            <AddFormLabelWrapper>
              <AddFormLabel htmlFor="price">
                Price
                <AddFormInput
                  placeholder="Your price"
                  type="number"
                  name="price"
                  onChange={handleInputChange}
                  value={formData.price}
                  onBlur={() => validateField("price", formData, setErrors)}
                  className={errors.price ? "invalid" : ""}
                />
              </AddFormLabel>
              {!!errors.price && <ErrorMessage message={errors.price} />}
            </AddFormLabelWrapper>
          )}
          <AddFormLabelWrapper>
            <AddFormTextAreaLabel htmlFor="comments">
              Comments
              <AddFormTextArea
                component="textarea"
                placeholder="Type of pet"
                type="text"
                name="comments"
                onChange={handleInputChange}
                value={formData.comments}
                onBlur={() => validateField("comments", formData, setErrors)}
                className={errors.comments ? "invalid" : ""}
              />
            </AddFormTextAreaLabel>
            {!!errors.comments && <ErrorMessage message={errors.comments} />}
          </AddFormLabelWrapper>
        </SecondPartFormWrapper>
      </MoreInfoFormWrapper>
      <AddFormButtonWrapper isMoreInfo={true} category={formData.category}>
        <AddFormButtonNext
          type="button"
          text="Done"
          icon={<PawPrintIcon />}
          filled={true}
          clickHandler={() => {
            setCollectedData((prevData) => ({ ...prevData, ...formData }));
            submit();
          }}
          isDisabled={isDisabled}
        />
        <AddFormButtonBack
          type="button"
          clickHandler={backStep}
          text="Back"
          isLink={false}
        />
      </AddFormButtonWrapper>
    </>
  );
};

MoreInfo.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  backStep: PropTypes.func.isRequired,
};

export default MoreInfo;
