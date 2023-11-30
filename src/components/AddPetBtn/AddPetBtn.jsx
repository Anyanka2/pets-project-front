import { AddPetLink, PlusIcon } from "./AddPetBtn.styled";
//import { theme } from "../../shared/styles/theme";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { useWindowSize } from '../../hooks/useResize';
import { ReactComponent as PlusBig } from "../../assets/icons/plus-big.svg";
import { ReactComponent as PlusSmall } from "../../assets/icons/plus-small.svg";
import { selectToken } from "../../redux/auth/selectors";

export const AddPetBtn = (props) => {
  const isAuthorized = useSelector(selectToken);
  const navigate = useNavigate();
  const [screenWidth] = useWindowSize();

  const handleClick = () => {
    if (!isAuthorized) {
      props.onClick();
      //toast.info("You need to log in!", {
      //  position: toast.POSITION.TOP_CENTER,
      // });
    } else {
      navigate("/add-pet");
    }
  };

  return (
    <>
      <AddPetLink onClick={handleClick}>
        <span>Add Pet</span>
        <PlusIcon>
        {screenWidth <= 767 && (
              <PlusBig />
        )}
        {screenWidth >= 768 && (
             <PlusSmall />
        )}
        </PlusIcon>
      </AddPetLink>
    </>
  );
};
