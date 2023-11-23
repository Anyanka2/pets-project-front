import { useState } from "react";
import {
  SearchButton,
  SearchForm,
  SearchInput,
} from "./SearchBar.styled";
import PropTypes from "prop-types";

export const SearchBar = (props) => {
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
      <SearchInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search"
        onChange={handleValueChange}
        value={value}
      ></SearchInput>
      <SearchButton type="submit">S</SearchButton>
    </SearchForm>
  );
};

SearchBar.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
