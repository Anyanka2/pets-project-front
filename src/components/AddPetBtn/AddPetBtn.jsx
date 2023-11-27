import { AddPetLink, PlusIcon } from "./AddPetBtn.styled";
//import { theme } from "../../shared/styles/theme";
//import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import { useNavigate} from "react-router-dom";
//import { useState } from "react";

export const AddPetBtn = () => {
  //   const [isActive, setIsActive] = useState(false);
  //   const navigate = useNavigate();

  //   const handleClick = () => {
  //     if (setIsActive(!isActive)) {
  //       toast.info("You need to sign in!", {
  //         position: toast.POSITION.BOTTOM_CENTER,
  //       });
  //       navigate("add-pet");
  //       return;
  //     }
  //   };
  return (
    <AddPetLink to="/add-pet">
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
  );
};
