import { Container } from "../../shared/components/Container";
import UserProfile from "../../components/UserProfile/UserProfile";
import MyPets from "../../components/MyPets/MyPets";
import { ContainerUser } from "../../components/MyPets/MyPets.styled";
import { AddPetBtn } from "../../components/AddPetBtn/AddPetBtn";
import { StyledBtn } from "../UserPage/UserPage.styled";

const UserPage = () => {
  return (
    <>
      <Container>
        <StyledBtn>
          <AddPetBtn />
          </StyledBtn>
        <ContainerUser>
          <UserProfile />
          <MyPets />
        </ContainerUser>
          </Container>
          
    </>
  );
};

export default UserPage;
