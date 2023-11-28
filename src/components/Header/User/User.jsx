import {UserIconLink} from './User.styled';
import { ReactComponent as UserIcon } from "../../../assets/icons/user.svg";

export const  UserButton = () => {
    return (
        <UserIconLink to='/user'>
           <UserIcon/>
        </UserIconLink>
    )
}

