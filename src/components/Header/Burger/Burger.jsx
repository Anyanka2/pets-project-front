import React, { useState } from "react";
import {
  MobileMenuContainer,
  MobileMenuItem,
  BurgerLogOutButton,
  LogoLinkBurger,
  CloseIcon,
} from "./Burger.styled";
import {
  ButtonsBurger,
  LinkBurgerLogin,
  LinkBurgerReg,
  BurgerNavContainer,
} from "./Burger.styled";
import { CustomSvg, Image, NavLinkContainer } from "../Header.styled";
import { useSelector } from "react-redux";
import { selectToken, userInfo } from "../../../redux/auth/selectors";
import svg from "../../../assets/icons/logo.svg";
import { ReactComponent as CrossIcon } from "../../../assets/icons/cross-small.svg";
import { ModalAlreaadyLeaving } from "../../UserProfile/ModalAlreadyLeaving/ModalAlreadyLeaving";
import { UserButton } from "../User/User";

const MobileMenu = ({ toggleMenu, isOpen }) => {
  const [openLogout, setOpenlogout] = useState(false);
  const logOutUser = () => {
    toggleMenu();
    setOpenlogout(!openLogout);
  };

  const { name } = useSelector(userInfo);

  const token = useSelector(selectToken);
  return (
    <>
      <MobileMenuContainer open={isOpen}>
        <LogoLinkBurger to="/main" onClick={toggleMenu}>
          <Image src={`${svg}`} />
        </LogoLinkBurger>
        <CloseIcon onClick={toggleMenu}>
          <CrossIcon />
        </CloseIcon>
        {token === null ? (
          <>
            <ButtonsBurger>
              <LinkBurgerLogin to="login" onClick={toggleMenu}>
                LOG IN
                <CustomSvg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <g clipPath="url(#a)">
                      <path d="M15.36 14.36a5.82 5.82 0 0 0-8.92-4.16l-4.07 2.58A3.67 3.67 0 0 0 .78 16.9a3.67 3.67 0 0 0 3.49 2.7h.05c2 .07 3.91.96 5.24 2.47a3.68 3.68 0 0 0 4.31.93A3.68 3.68 0 0 0 16 19.14l-.64-4.78Zm-2.07 7.36c-.93.42-2 .2-2.67-.57A8.66 8.66 0 0 0 4.3 18.2h-.04c-1-.04-1.85-.7-2.12-1.68s.12-2 .98-2.55L7.2 11.4a4.42 4.42 0 0 1 6.77 3.16l.64 4.78c.14 1-.4 1.97-1.32 2.4ZM4.72 9.4c.83.05 1.63-.26 2.24-.9.6-.6.95-1.42 1.01-2.32.07-.89-.18-1.75-.68-2.43a2.84 2.84 0 0 0-2.1-1.2c-1.66-.1-3.12 1.33-3.25 3.22-.1 1.5.67 2.84 1.83 3.38.3.14.61.22.95.25ZM3.35 5.87c.07-1.12.86-1.97 1.75-1.9.16 0 .31.04.46.11.23.1.43.28.6.5.3.42.45.95.41 1.5a2.26 2.26 0 0 1-.61 1.44c-.33.33-.73.5-1.14.47-.89-.06-1.55-1.01-1.47-2.12Z" />
                      <path d="M10.64 8.65c1.76.82 3.96-.15 4.9-2.15.93-2.01.26-4.31-1.5-5.13-1.77-.83-3.96.14-4.9 2.15-.93 2-.26 4.3 1.5 5.13Zm2.8-6c1.06.48 1.43 1.95.82 3.25-.6 1.3-1.97 1.97-3.02 1.47-1.06-.5-1.43-1.95-.82-3.26.6-1.3 1.96-1.96 3.02-1.47ZM15.74 12.11c.23.22.49.4.76.52 1.29.6 2.98.25 4.13-.97a3.94 3.94 0 0 0 1.1-2.48c.04-.95-.29-1.8-.93-2.41a3.04 3.04 0 0 0-2.46-.79c-.9.1-1.76.54-2.42 1.24-1.4 1.47-1.47 3.67-.18 4.9Zm1.2-3.93c.43-.45.98-.74 1.55-.8.53-.06 1 .09 1.34.4.34.33.52.8.49 1.32a2.53 2.53 0 0 1-.72 1.6c-.86.9-2.16 1.09-2.89.4-.73-.7-.63-2 .23-2.92ZM22.67 14.83c-.8-1.47-2.8-1.93-4.46-1.03-1.66.9-2.36 2.83-1.57 4.3.3.53.74.93 1.28 1.18.93.43 2.12.41 3.18-.16 1.66-.9 2.36-2.83 1.57-4.3Zm-2.24 3.05c-.98.53-2.12.33-2.55-.46-.42-.78.03-1.85 1-2.38a2.16 2.16 0 0 1 1.91-.13c.28.13.5.33.64.59.43.78-.02 1.85-1 2.38Z" />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path d="M0 0h24v24H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </CustomSvg>
              </LinkBurgerLogin>
              <LinkBurgerReg to="register" onClick={toggleMenu}>
                Registration
              </LinkBurgerReg>
            </ButtonsBurger>
          </>
        ) : (
          <>
            <NavLinkContainer to="/user" onClick={toggleMenu}>
              <UserButton />
              {name}
            </NavLinkContainer>

            <BurgerLogOutButton onClick={logOutUser}>
              Log out
              <CustomSvg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4M3 12h12M3 12l4-4m-4 4 4 4"
                  />
                </svg>
              </CustomSvg>
            </BurgerLogOutButton>
          </>
        )}
        <BurgerNavContainer>
          <MobileMenuItem to="news" onClick={toggleMenu}>
            News
          </MobileMenuItem>
          <MobileMenuItem to="notices" onClick={toggleMenu}>
            Find Pet
          </MobileMenuItem>
          <MobileMenuItem to="friends" onClick={toggleMenu}>
            Our Friends
          </MobileMenuItem>
        </BurgerNavContainer>
      </MobileMenuContainer>

      {openLogout ? (
        <ModalAlreaadyLeaving
          isOpenlogout={openLogout}
          logOutUser={logOutUser}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default MobileMenu;
