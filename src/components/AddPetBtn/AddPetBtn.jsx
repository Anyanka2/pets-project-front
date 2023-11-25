import { AddPetLink } from "./AddPetBtn.styled";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus-small.svg";
import { theme } from "../../shared/styles/theme";

export const AddPetBtn = () => {
  return (
    <AddPetLink>
      <span>Add Pet</span>
      <PlusIcon width={24} height={24} stroke={theme.colors.white} />
    </AddPetLink>
  );
};