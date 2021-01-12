import React from "react";
import SearchInput from "../components/SearchInput";
import Movies from "../components/Movies";

const AppComp = () => (
  <React.Fragment>
      <h2>Search for your movie</h2>
      <SearchInput />
      <h2>Movies</h2>
      <Movies />
  </React.Fragment>
);

export default AppComp;