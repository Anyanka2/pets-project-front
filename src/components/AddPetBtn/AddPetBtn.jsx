import { AddPetLink, PlusIcon } from "./AddPetBtn.styled";
//import { theme } from "../../shared/styles/theme";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/user/userSelectors";

export const AddPetBtn = (props) => {
  const isAuthorized = useSelector(selectToken);
  const navigate = useNavigate();

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
      {/* <ToastContainer /> */}
      <AddPetLink onClick={handleClick}>
        <span>Add Pet</span>
        <PlusIcon>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M12 7v10m-5-5h10"
            />
          </svg>
        </PlusIcon>
      </AddPetLink>
    </>
  );
};
