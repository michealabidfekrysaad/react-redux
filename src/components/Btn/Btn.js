import React from "react";
import "./Btn.css";

const Btn = ({ btnInfo:{handleSubmit, type, content, classBtn} }) => {
  return (
    <button type={type} onClick={handleSubmit} className={classBtn}>
      {content}
    </button>
  );
};

export default Btn;
