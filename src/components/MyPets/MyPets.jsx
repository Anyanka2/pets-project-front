import { Icon } from "./Icon";
import ImgPet from "../../../src/assets/images/petsImages/cat1.jpg";
import {
  ContainerItem,
  Image,
  InfoContainer,
  Text,
  DeleteIcon,
  TitlePet,
  AllCardsPet,
  ImageFon,
  TitleWithoutPet,
} from "./MyPets.styled";
import { useSelector } from "react-redux";
import imgFon from "../../assets/images/petsImages/black-white-cat.png";
import { userInfo } from "../../redux/auth/selectors";

export default function MyPets() {
  const { petsData = [] } = useSelector(userInfo);

  return (
    <>
      <AllCardsPet>
        <TitlePet>My Pets:</TitlePet>
        {petsData.length === 0 ? (
          <div>
            <TitleWithoutPet>
              There are no pets added to your list yet
            </TitleWithoutPet>
            <ImageFon src={imgFon}></ImageFon>
          </div>
        ) : (
          ""
        )}
        {petsData?.map((info) => (
          <ContainerItem key={info._id}>
            <Image src={ImgPet} alt="photo pets" width={240} height={240} />
            <InfoContainer>
              <DeleteIcon>
                <Icon
                  iconName={"icon-trash"}
                  width={"24px"}
                  height={"24px"}
                  stroke={"#54ADFF"}
                />
              </DeleteIcon>
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
          </ContainerItem>
        ))}
      </AllCardsPet>
    </>
  );
}
