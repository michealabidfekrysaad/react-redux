import React, { useState } from "react";
import { connect } from "react-redux";
import "./SearchInput.css";
import Input from "../Input/Input";
import Btn from "../Btn/Btn";
import { moviesRequest } from "../../store/actions/Movies";

let style = {
  display: "block",
  width: "40%",
  margin: "auto",
  textAlign: "left",
};

const SearchInput = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState({ searchValue: "" });

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSearchValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { moviesRequest } = props;
    if (searchValue.length < 5) {
      setError({
        searchValue: `Increase length of text by ${5 - searchValue.length}`,
      });
      style = {
        ...style,
        color: "red",
      };
    } else {
      setError({ searchValue: "" });
      style = {
        ...style,
        color: "white",
      };
      moviesRequest({ searchValue });
    }
    // ana weselt lel movies.js inisde saga
  };

  return (
    <main>
      <div>
        <Input
          textInfo={{
            searchValue,
            handleChange,
            placeHolder: "enter your movie name",
            type: "text",
            id: "searchValue",
            classInput: "text-class"
          }}
        />
        <span style={style}>
          {error.searchValue ? error.searchValue : "hint: min-length is 5"}
        </span>
      </div>
      <Btn
        btnInfo={{
          handleSubmit,
          type: "submit",
          content: "Search",
          classBtn: "submit-class",
        }}
      />
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

export default connect(null, { moviesRequest })(SearchInput);
