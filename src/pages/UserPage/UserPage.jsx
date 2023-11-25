import { Container } from "../../shared/components/Container";
import UserProfile from "../../components/UserProfile/UserProfile";
import MyPets from "../../components/MyPets/MyPets";
import { ContainerUser } from "../../components/MyPets/MyPets.styled";
import { AddPetBtn } from "../../components/AddPetBtn/AddPetBtn";

const UserPage = () => {
  return (
    <>
          <Container>
              <AddPetBtn />
        <ContainerUser>
          <UserProfile />
          <MyPets />
        </ContainerUser>
          </Container>
          
    </>
  );
};

export default UserPage;
