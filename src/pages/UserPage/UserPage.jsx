import { Container } from "../../shared/components/Container";
import UserProfile from "../../components/UserProfile/UserProfile";
import MyPets from "../../components/MyPets/MyPets";
import { ContainerUser } from "../../components/MyPets/MyPets.styled";

const UserPage = () => {
  return (
    <>
      <Container>
        <ContainerUser>
          <UserProfile />
          <MyPets />
        </ContainerUser>
      </Container>
    </>
  );
};

export default UserPage;
