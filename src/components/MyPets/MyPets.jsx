
import {
  ContainerItem,
  Image,
  InfoContainer,
  Text,
  TitlePet,
  AllCardsPet,
  ImageFon,
  TitleWithoutPet,
  ButtonTrash
} from "./MyPets.styled";
import { theme } from "../../shared/styles/theme";
import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg";
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
              <ButtonTrash aria-label="delete from favorites">
              <TrashIcon
                width={"24px"}
                height={"24px"}
                stroke={theme.colors.blueLink}
                fill={theme.colors.lightBlue}
              />
            </ButtonTrash>
            </ContainerItem>
           
          </>
        ))}
      </AllCardsPet>
    </>
  );
}
