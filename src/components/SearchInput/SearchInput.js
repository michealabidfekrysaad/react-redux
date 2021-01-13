import React, { useState } from "react";
import { connect } from "react-redux";
import "./SearchInput.css";
import TextInput from "../TextInput/TextInput";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
import { moviesRequest } from "../../store/actions/Movies";

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
    // console.log(props);
    event.preventDefault();
    const { moviesRequest } = props;
    if (searchValue) moviesRequest({searchValue});
    // ana weselt lel movies.js inisde saga
  };

  return (
    <main>
      <TextInput searchValue={searchValue} handleChange={handleChange} />
      <ButtonSubmit handleSubmit={handleSubmit} />
    </main>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return moviesRequest({});
//   // return {
//   //   AddMovie: (searchValue) =>
//   //     dispatch({ type: "DATA_LOADED", value: searchValue }),
//   // };
// };

export default connect(null, {moviesRequest})(SearchInput);
