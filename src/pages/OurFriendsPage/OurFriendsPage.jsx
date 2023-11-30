import { infoFriends } from "../../assets/baza-infoFriends/infoFriends";
import { TitlePage } from "../../shared/components/TitlePage.styled";
import { Container } from "../../shared/components/Container";
import { OurFriends } from "../../components/OurFriends/OurFriends";
import { StaledDiv } from "../OurFriendsPage/OurFriendsPage.styled";

const OurFriendsPage = () => {
  return (
    <>
      <Container>
        <StaledDiv>
          <TitlePage>Our Friends</TitlePage>
        </StaledDiv>
        <OurFriends ourFriends={infoFriends} />
      </Container>
    </>
  );
};

export default OurFriendsPage;
