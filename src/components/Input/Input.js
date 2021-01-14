import React from 'react';
import "./Input.css";

// ana hena 3amel destruction lel props w ay change baktebo hena beysam3 fe el SearchInput
//el mafrod ana ba3et props.handleChange && props.searchValue.
//keda ana 3amel reusable input 3 bab3at leh el value w fn on change beta3to 
const Input = ({textInfo:{handleChange, searchValue, placeHolder, type, id, classInput}}) => {
    return ( 
        <input
        placeholder={placeHolder}
        type={type}
        id={id}
        value={searchValue}
        onChange={handleChange}
        className={classInput}
      />
     );
}
 
export default Input;