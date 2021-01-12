import React, { useState } from "react";
import { connect } from "react-redux";
import "./SearchInput.css";
import TextInput from "../TextInput/TextInput";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";

// import { AddMovie } from "../store/AddMovieAction";

const SearchInput = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSearchValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { AddMovie } = props
    if (searchValue) AddMovie(searchValue);
  };

  return (
    <form>
      <TextInput searchValue={searchValue} handleChange={handleChange} />
      <ButtonSubmit handleSubmit={handleSubmit} />
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    AddMovie: (searchValue) =>
      dispatch({ type: "DATA_LOADED", value: searchValue }),
  };
};

export default connect(null, mapDispatchToProps)(SearchInput);
