import React from "react";
import SearchInput from "../components/SearchInput/SearchInput";
import Books from "../components/Books/Books";

const AppComp = () => (
  <React.Fragment>
      <h2>Search for your movie</h2>
      <SearchInput />
      <h2>Books</h2>
      <Books />
  </React.Fragment>
);

export default AppComp;