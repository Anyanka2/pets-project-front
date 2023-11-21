import Header from "../Header/Header.jsx";
import { Outlet } from "react-router-dom";
import { BackgroundImg } from "../../shared/components/BackgroundImg.styled.jsx";
function SharedLayout() {
  return (
    <>
      <Header />
      <BackgroundImg>
        <Outlet />
      </BackgroundImg>
    </>
  );
}

export default SharedLayout;
