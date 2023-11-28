import { AddPetLink, PlusIcon } from "./AddPetBtn.styled";
//import { theme } from "../../shared/styles/theme";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
//import { useState } from "react";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/user/userSelectors";

export const AddPetBtn = () => {
  const isAuthorized = useSelector(selectToken);
  const navigate = useNavigate();

  const handleClick = () => {
      if (!isAuthorized) {
        toast.info("You need to sign in!", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      } else {
        navigate("/add-pet");
    }
  };
  return (
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
  );
};
