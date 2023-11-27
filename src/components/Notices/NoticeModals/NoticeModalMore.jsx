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
  HeartIcon,
} from "./NoticeModal.styled";
import PetPhoto from "../../../assets/images/petsImages/cat1.jpg";
//import { theme } from "../../../shared/styles/theme";

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
            <HeartIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M4.331 12.047 12 20l7.669-7.953A4.804 4.804 0 0 0 21 8.714C21 6.111 18.965 4 16.454 4a4.465 4.465 0 0 0-3.214 1.38L12 6.668 10.76 5.38A4.465 4.465 0 0 0 7.546 4C5.036 4 3 6.11 3 8.714c0 1.25.479 2.45 1.331 3.333Z"
                />
              </svg>
            </HeartIcon>
          </AddToFavBtn>
          <ContactLink href={`tel:+380971234567`}>Contact</ContactLink>
        </BtnContainer>
      </Content>
    </>
  );
};
