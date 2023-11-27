import {
  Content,
  Image,
  ImageContainer,
  ContainerInfo,
  Title,
  Type,
  List,
  ItemWrap,
  Item,
  Comment,
  ContactLink,
  AddToFavBtn,
  BtnContainer,
} from "./NoticeModal.styled";
import { ReactComponent as HeartIcon } from "../../../assets/icons/heart.svg";
//import { ReactComponent as IconClose } from "../../../assets/icons/close.svg";
import PetPhoto from "../../../assets/images/petsImages/cat1.jpg";
import { theme } from "../../../shared/styles/theme";
import { useDispatch } from "react-redux";
import { getOneNotice } from "../../../redux/notices/operationsNotices";
import { useEffect } from "react";
import { useState } from "react";

export const NoticeModalMore = ({
  //avatar,
  title,
  location,
  birthday,
  sex,
  name,
  type,
  price,
  //owner,
  comments,
  category,
  noticeId,
}) => {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  }

  const [infoOnePet, setInfoOnePet] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOneNotice = async () => {
      try {
        if (noticeId) {
          const response = await dispatch(getOneNotice(noticeId));
          setInfoOnePet(response.payload);
        }
        return;
      } catch (error) {}
    };
    fetchOneNotice();
  }, [dispatch, noticeId]);

  return (
    <>
      <Content>
        <ContainerInfo>
          <ImageContainer>
            <Image src={PetPhoto} alt="dog" />
            <Type>{category}sell</Type>
          </ImageContainer>
          <div style={{ width: "321px", padding: "0 12px" }}>
            <Title>{infoOnePet.title}</Title>
            <div style={{ display: "flex", gap: "50px" }}>
              <List>
                <Item>Name: </Item>
                <Item>Birthday: </Item>
                <Item>Type: </Item>
                {price !== "0$" && price !== "0" && <Item>Price: </Item>}
                <Item>Place: </Item>
                <Item>The sex: </Item>
                <Item>Email: </Item>
                <Item>Phone: </Item>
              </List>

              <List>
                <ItemWrap>{infoOnePet.name}</ItemWrap>
                <ItemWrap>{formatDate(infoOnePet.birthday)}</ItemWrap>
                <ItemWrap>{infoOnePet.type}</ItemWrap>
                {price !== "0$" && price !== "0" && (
                  <ItemWrap>{infoOnePet?.price || 0}</ItemWrap>
                )}
                <ItemWrap>{infoOnePet.location}</ItemWrap>
                <ItemWrap>{infoOnePet.sex}</ItemWrap>
                <ItemWrap>
                  <a
                    style={{ color: "#FFC107" }}
                    href={`mailto:${infoOnePet.email}`}
                  >
                    {infoOnePet.email}
                  </a>
                </ItemWrap>
                <ItemWrap>
                  <a
                    style={{ color: "#FFC107" }}
                    href={`tel:+${infoOnePet.phone}`}
                  >
                    {infoOnePet.phone}
                  </a>
                </ItemWrap>
              </List>
            </div>
          </div>
        </ContainerInfo>
        <Comment>Comments: {infoOnePet.comments}</Comment>
        <BtnContainer>
          <AddToFavBtn type="button">
            <span>Add to</span>
            <HeartIcon
              width={"20px"}
              height={"20px"}
              fill={theme.colors.white}
            />
          </AddToFavBtn>
          <ContactLink href={`tel:${infoOnePet.phone}`}>Contact</ContactLink>
        </BtnContainer>
      </Content>
    </>
  );
};
