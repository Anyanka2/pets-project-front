import Header  from "../Header/Header.jsx";
import {Outlet} from 'react-router-dom';
function SharedLayout (){
    return (
        <>
        <Header />
        <Outlet />
        </>
    )
}

export default SharedLayout;