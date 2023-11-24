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
import { ReactComponent as IconClose } from "../../../assets/icons/close.svg";
import PetPhoto from "../../../assets/images/petsImages/cat1.jpg";
import { theme } from "../../../shared/styles/theme";

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
}) => {
  return (
    <>
      <Content>
        <ContainerInfo>
          <IconClose />
          <ImageContainer>
            <Image src={PetPhoto} alt="dog" />
            <Type>{category}sell</Type>
          </ImageContainer>
          <div style={{ width: "321px", padding: "0 12px" }}>
            <Title>{title}Cute pet looking for a home</Title>
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
                <ItemWrap>{name}Rich</ItemWrap>
                <ItemWrap>{birthday}21.09.2020</ItemWrap>
                <ItemWrap>{type}Pomeranian</ItemWrap>
                {price !== "0$" && price !== "0" && (
                  <ItemWrap>{price}1mln</ItemWrap>
                )}
                <ItemWrap>{location}Lviv</ItemWrap>
                <ItemWrap>{sex}male</ItemWrap>
                <ItemWrap>
                  <a style={{ color: "#FFC107" }} href={`mailto:user@mail.com`}>
                    user@mail.com
                  </a>
                </ItemWrap>
                <ItemWrap>
                  <a style={{ color: "#FFC107" }} href={`tel:+380971234567`}>
                    +380971234567
                  </a>
                </ItemWrap>
              </List>
            </div>
          </div>
        </ContainerInfo>
        <Comment>
          {comments}Rich would be the perfect addition to an active family that
          loves to play and go on walks. I bet he would love having a doggy
          playmate too!
        </Comment>
        <BtnContainer>
          <AddToFavBtn type="button">
            <span>Add to</span>
            <HeartIcon
              width={"20px"}
              height={"20px"}
              fill={theme.colors.white}
            />
          </AddToFavBtn>
          <ContactLink href={`tel:+380971234567`}>Contact</ContactLink>
        </BtnContainer>
      </Content>
    </>
  );
};
