import { UserProfileContainer, 
    UserPhotoBox, 
    UserDataBox,
    LogoutBtn,
    LogoutContent,
    UserImg,
    TableTitleColumn,
    TableUserDataColumn
    } from "./UserProfile.styled";
import UserPhotoDefault from "../../assets/icons/user_photo_default.svg";

export default function UserProfile () {
    return (<>
        <UserProfileContainer>
            <UserPhotoBox>
                <UserImg src={UserPhotoDefault} alt="User profile" />
            </UserPhotoBox>
            <UserDataBox>
                <table>
                    <tr>
                        <TableTitleColumn>Name:</TableTitleColumn>
                        <TableUserDataColumn>Anna:</TableUserDataColumn>
                    </tr>
                    <tr>
                        <TableTitleColumn>Email:</TableTitleColumn>
                        <TableUserDataColumn>Anna</TableUserDataColumn>
                    </tr>
                    <tr>
                        <TableTitleColumn>Birthday:</TableTitleColumn>
                        <TableUserDataColumn>Anna</TableUserDataColumn>
                    </tr>
                    <tr>
                        <TableTitleColumn>Phone:</TableTitleColumn>
                        <TableUserDataColumn>Anna</TableUserDataColumn>
                    </tr>
                    <tr>
                        <TableTitleColumn>City:</TableTitleColumn>
                        <TableUserDataColumn>Anna</TableUserDataColumn>
                    </tr>
                </table>
            </UserDataBox>
            <LogoutBtn>
                <LogoutContent>Log Out</LogoutContent>
            </LogoutBtn>
        
        </UserProfileContainer>
        </>);
}