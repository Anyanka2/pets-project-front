
import {
  ContainerItem,
  Image,
  InfoContainer,
  Text,
  TitlePet,
  AllCardsPet,
  ImageFon,
} from "./MyPets.styled";
import { Button } from "../Notices/NoticeCard/NoticeCard.styled";
import { theme } from "../../shared/styles/theme";
import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg";
import { useSelector } from "react-redux";
import imgFon from "../../assets/images/petsImages/cat6.jpg";
import { userInfo } from "../../redux/auth/selectors";

export default function MyPets() {
  const { petsData = [] } = useSelector(userInfo);
  // const dispatch = useDispatch();
console.log(petsData);
  return (
    <>
      <AllCardsPet>
        <TitlePet>My Pets:</TitlePet>
        {petsData.length === 0 ? <ImageFon src={imgFon}></ImageFon> : ""}
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
            </ContainerItem>
            <Button aria-label="delete from favorites">
              <TrashIcon
                width={"24px"}
                height={"24px"}
                stroke={theme.colors.blueLink}
                fill={theme.colors.lightBlue}
              />
            </Button>
          </>
        ))}
      </AllCardsPet>
    </>
  );
}
