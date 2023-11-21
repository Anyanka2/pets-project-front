import { Container } from "../../shared/components/Container";
import UserProfile from "../../components/UserProfile/UserProfile";
import MyPets from "../../components/MyPets/MyPets";

const UserPage = () => {

    return (
        <>
        <Container>
            <UserProfile />
            <MyPets />
            <div>This is the User Page!</div>
        </Container>
        </>
    )
}

export default UserPage;