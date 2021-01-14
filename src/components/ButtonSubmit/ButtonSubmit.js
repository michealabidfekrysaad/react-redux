import React from "react";
import "./ButtonSubmit.css";

const Btn = ({ btnInfo:{handleSubmit, type, content} }) => {
  return (
    <button type={type} onClick={handleSubmit}>
      {content}
    </button>
  );
};

export default Btn;
