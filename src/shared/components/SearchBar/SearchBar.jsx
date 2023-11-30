import { useState } from "react";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";
import { ReactComponent as CloseIcon } from "../../../assets/icons/close.svg";
import {
  SearchButton,
  SearchForm,
  SearchLabel,
  SearchInput,
  SearchIconStyle,
  CloseIconStyle,
} from "./SearchBar.styled";
import PropTypes from "prop-types";

export const SearchBar = ({ petValue, onChange }) => {
  const [value, setValue] = useState("");

  const onSubmit = (value) => {
    setValue(value);
  };

  const handleValueChange = (event) => {
    setValue(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim() === "") {
      return;
    }
    // props.onSubmit(value);
    onSubmit(value);
    setValue("");
  };
  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchLabel>
        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search"
          onChange={(e) => onChange(e.target.value)}
          value={petValue}
        ></SearchInput>
        <SearchButton type="submit">
          <SearchIconStyle>
            <SearchIcon />
          </SearchIconStyle>
        </SearchButton>
        {value.length > 0 && (
          <SearchButton onClick={() => {}}>
            <CloseIconStyle>
              <CloseIcon />
            </CloseIconStyle>
          </SearchButton>
        )}
      </SearchLabel>
    </SearchForm>
  );
};

SearchBar.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
