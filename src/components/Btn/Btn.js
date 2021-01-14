import React from "react";
import "./Btn.css";

const Btn = ({ btnInfo:{handleClick, type, content, classBtn} }) => {
  return (
    <button type={type} onClick={handleClick} className={classBtn}>
      {content}
    </button>
  );
};

export default Btn;
