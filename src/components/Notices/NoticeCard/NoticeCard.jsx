//import { useEffect, useState } from "react";
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
import { useState } from "react";
import UniversalModal from "../../../shared/components/UniversalModal/UniversalModal";
import {NoticeModalMore} from "../NoticeModals/NoticeModalMore.jsx";
export const NoticeCard = (item) => {
  const [isModal, setIsModal] = useState(false);
  //   const [isFavorite, setIsFavorite] = useState(item.isFavorite);
  // const [card] = useState({});
  //   const { user } = useAuth();

  //   useEffect(() => {
  //     if (!user.name && !user.email) {
  //       setIsFavorite(false);
  //     }
  //   }, [user]);

  //     useEffect(() => {
  //     if (Object.keys(card).length === 0) {
  //       return;
  //     }
  //   });

  const handleModal = ()=>{
    console.log(isModal);
    setIsModal(prev=>!prev);
  }

  return (
    <>
      <Item key={item.id}>
        <ContainerPetInfo>
          <Image
            src={PetPhoto}
            alt="pet"
            loading="lazy"
          ></Image>
          <ContainerPetStatus>
            <TextStatus>in good hands</TextStatus>
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
              <SpanPetText>Location</SpanPetText>
            </ItemPetInfo>
            <ItemPetInfo>
              <ClockIcon />
              <SpanPetText>Age</SpanPetText>
            </ItemPetInfo>
            <ItemPetInfo>
              <FemaleIcon />
              <MaleIcon />
              <SpanPetText>Gender</SpanPetText>
            </ItemPetInfo>
          </ListPetInfo>
        </ContainerPetInfo>
        <TextPetName>Cute pet looking for a home</TextPetName>
        <LearnMoreBtn aria-label="show more options" onClick={handleModal} >Learn more</LearnMoreBtn>
      </Item>
      <UniversalModal isModalOpen={isModal} evt="children" onClick={handleModal} >
          <NoticeModalMore />
      </UniversalModal>
    </>
  );
};
