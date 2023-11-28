//import { useAuth } from "../../../hooks/useAuth";
import {
  Item,
  ContainerPetInfo,
  Image,
  ContainerPetStatus,
  TextStatus,
  ContainerButton,
  Button,
  ListPetInfo,
  ItemPetInfo,
  SpanPetText,
  TextPetName,
  LearnMoreBtn,
} from "./NoticeCard.styled";
import { ReactComponent as HeartIcon } from "../../../assets/icons/heart.svg";
import { ReactComponent as TrashIcon } from "../../../assets/icons/trash.svg";
import { ReactComponent as LocationIcon } from "../../../assets/icons/location.svg";
import { ReactComponent as ClockIcon } from "../../../assets/icons/clock.svg";
import { ReactComponent as FemaleIcon } from "../../../assets/icons/female.svg";
import { ReactComponent as MaleIcon } from "../../../assets/icons/male.svg";
import PetPhoto from "../../../assets/images/petsImages/cat1.jpg";
import { theme } from "../../../shared/styles/theme";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { infoNotices } from "../../../redux/notices/selectorsNotices.js";
import { useEffect, useState } from "react";
import { getAllNotices } from "../../../redux/notices/operationsNotices.js";

import { Loader } from "../../Loader/Loader.jsx";

export const NoticeCard = (props) => {
  
  const [dataAtr, setDataAtr] = useState({page: 1, items: 12})
  // const [currentPage, setCurrentPage] = useState(1);


  function calculateAge(dateOfBirth) {
    const dob = new Date(dateOfBirth);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    return age;
  }
  const { notices } = useSelector(infoNotices);
  setDataAtr({page: 2, items: 12})
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllNotices(dataAtr));
  }, [dispatch, dataAtr]);

 
  // console.log(props);

  return (
    <>
      {notices.length > 0 ? (
        notices.map((notice) => (
          <Item key={notice._id}>
            <ContainerPetInfo>
              <Image src={PetPhoto} alt="pet" loading="lazy"></Image>
              <ContainerPetStatus>
                <TextStatus>{notice.category}</TextStatus>
                <ContainerButton>
                  <Button aria-label="add to favorites">
                    <HeartIcon
                      width={"24px"}
                      height={"24px"}
                      stroke={theme.colors.blueLink}
                    />

                    <HeartIcon
                      width={"24px"}
                      height={"24px"}
                      fill={theme.colors.blueLink}
                    />
                  </Button>

                  <Button aria-label="delete from favorites">
                    <TrashIcon
                      width={"24px"}
                      height={"24px"}
                      stroke={theme.colors.blueLink}
                      fill={theme.colors.lightBlue}
                    />
                  </Button>
                </ContainerButton>
              </ContainerPetStatus>
              <ListPetInfo>
                <ItemPetInfo>
                  <LocationIcon />
                  <SpanPetText>{notice.location}</SpanPetText>
                </ItemPetInfo>
                <ItemPetInfo>
                  <ClockIcon />
                  <SpanPetText>
                    {calculateAge(notice.birthday)} year
                  </SpanPetText>
                </ItemPetInfo>
                <ItemPetInfo>
                  <FemaleIcon />
                  <MaleIcon />
                  <SpanPetText>{notice.sex}</SpanPetText>
                </ItemPetInfo>
              </ListPetInfo>
            </ContainerPetInfo>
            <TextPetName>{notice.title}</TextPetName>
            <LearnMoreBtn
              aria-label="show more options"
              onClick={()=>props.handleModal(notice._id)}
            >
              Learn more
            </LearnMoreBtn>
          </Item>
        ))
      ) :  <Loader /> }

     
    </>
  );
};
