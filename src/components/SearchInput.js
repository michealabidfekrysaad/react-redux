import React, { useState } from "react";
import { connect } from "react-redux";

// import { AddMovie } from "../store/AddMovieAction";

const SearchInput = (props) => {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setTitle(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.AddMovie(title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          placeholder="enter your movie name"
          type="text"
          id="title"
          value={title}
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={!title}>
        Search
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    AddMovie: ( title ) => dispatch({ type: "DATA_LOADED", value: title }),
  };
};

export default connect(null, mapDispatchToProps)(SearchInput);
