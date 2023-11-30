import {
  ContainerItem,
  Image,
  InfoContainer,
  Text,
  TitlePet,
  AllCardsPet,
  ImageFon,
  ButtonTrash,
  StyledDiv,
  //TitleWithoutPet,
} from "./MyPets.styled";
import { theme } from "../../shared/styles/theme";
import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg";
import { useDispatch, useSelector } from "react-redux";
import imgFon from "../../assets/images/userPage/cat-circle.png";
import { userInfo } from "../../redux/auth/selectors";
import { TitlePage } from "../../shared/components/TitlePage.styled";
import { deleteMyPet, getCurrentUser } from "../../redux/auth/operation";
import { useEffect, useState } from "react";

export default function MyPets() {
  const { petsData = [] } = useSelector(userInfo);
  const [localPetsData, setLocalPetsData] = useState(petsData);
  const dispatch = useDispatch();

  useEffect(() => {
    setLocalPetsData(petsData);
  }, [petsData]);
  console.log(petsData);

  const deletePet = async (_id) => {
    await dispatch(deleteMyPet(_id));
    const updatedLocalPetsData = localPetsData.filter((pet) => pet._id !== _id);
    setLocalPetsData(updatedLocalPetsData);
    dispatch(getCurrentUser());
  };

  return (
    <>
      <AllCardsPet>
        <TitlePet>My Pets:</TitlePet>
        {localPetsData.length === 0 ? (
          <div>
            <TitlePage style={{ fontSize: "36px" }}>
              OMG! There are no pets added to your list yet!
            </TitlePage>
            <StyledDiv>
              <ImageFon src={imgFon}></ImageFon>
            </StyledDiv>
          </div>
        ) : (
          <></>
        )}
        {localPetsData?.map((info) => (
          <>
            <ContainerItem key={info._id}>
              <Image
                src={info.imageUrl}
                alt="photo pets"
                width={240}
                height={240}
              />
              <InfoContainer>
                <Text>
                  <b>{"Name"}: </b>
                  {info.name}
                </Text>
                <Text>
                  <b>{"Date of birth"}: </b>
                  {info.birthday}
                </Text>
                <Text>
                  <b>{"Type"}: </b>
                  {info.type}
                </Text>
                <Text>
                  <b>{"Comments"}: </b>
                  {info.comments}
                </Text>
              </InfoContainer>
              <ButtonTrash
                aria-label="delete from favorites"
                onClick={() => deletePet(info._id)}
              >
                <TrashIcon
                  width={"24px"}
                  height={"24px"}
                  stroke={theme.colors.blueLink}
                />
              </ButtonTrash>
            </ContainerItem>
          </>
        ))}
      </AllCardsPet>
    </>
  );
}
