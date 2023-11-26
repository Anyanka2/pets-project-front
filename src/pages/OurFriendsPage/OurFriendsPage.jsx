import { TitlePage } from "../../shared/components/TitlePage.styled";
import { OurFriends } from "../../components/OurFriends/OurFriends";
import { infoFriends } from "../../components/OurFriends/infoFriends";

const OurFriendsPage = () => {

    return (
      <>
        <TitlePage>This is the Our Friends Page!</TitlePage>
        <OurFriends ourFriends={infoFriends} />
      </>
    );
}

export default OurFriendsPage;