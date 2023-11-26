import { Icon } from "./Icon";
import ImgPet from "../../../src/assets/images/petsImages/cat1.jpg";
import {
  ContainerItem,
  Image,
  InfoContainer,
  Text,
  DeleteIcon,
  TitlePet,
  AllCardsPet
} from "./MyPets.styled";

export default function MyPets() {
  return (
    <>
      
      <AllCardsPet>
      <TitlePet>My Pets:</TitlePet>
        <ContainerItem>
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
              Murka
            </Text>
            <Text>
              <b>{"Date of birth"}: </b>
              22.04.2018
            </Text>
            <Text>
              <b>{"Type"}: </b>
              Persian cat
            </Text>
            <Text>
              <b>{"Comments"}: </b>
              Jack is a gray Persian cat with green eyes. He loves to be
              pampered and groomed, and enjoys playing with toys. Although a
              bitshy, he's a loyal and affectionate lap cat.
            </Text>
          </InfoContainer>
        </ContainerItem>
        <ContainerItem>
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
              Murka
            </Text>
            <Text>
              <b>{"Date of birth"}: </b>
              22.04.2018
            </Text>
            <Text>
              <b>{"Type"}: </b>
              Persian cat
            </Text>
            <Text>
              <b>{"Comments"}: </b>
              Jack is a gray Persian cat with green eyes. He loves to be
              pampered and groomed, and enjoys playing with toys. Although a
              bitshy, he's a loyal and affectionate lap cat.
            </Text>
          </InfoContainer>
        </ContainerItem>
      </AllCardsPet>
    </>
  );
}
