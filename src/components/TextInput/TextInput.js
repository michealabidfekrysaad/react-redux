import React from 'react';
import "./TextInput.css";

// ana hena 3amel destruction lel props w ay change baktebo hena beysam3 fe el SearchInput
//el mafrod ana ba3et props.handleChange && props.searchValue.
//keda ana 3amel reusable input 3 bab3at leh el value w fn on change beta3to 

const TextInput = ({handleChange, searchValue}) => {
    return ( 
        <input
        placeholder="enter your movie name"
        type="text"
        id="searchValue"
        value={searchValue}
        onChange={handleChange}
      />
     );
}
 
export default TextInput;