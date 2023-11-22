import { useState } from "react";
import { Search } from "./SearchBar.styled";
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
    <div>
      <form onSubmit={handleSubmit}>
        <Search
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search"
          onChange={handleValueChange}
          value={value}
        />
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
