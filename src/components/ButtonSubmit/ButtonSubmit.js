import React from "react";
import "./ButtonSubmit.css";

const ButtonSubmit = ({ handleSubmit }) => {
  return (
    <button type="submit" onClick={handleSubmit}>
      Search
    </button>
  );
};

export default ButtonSubmit;
