import React from "react";
import Form from "../components/Form";
import Movies from "../components/Movies";

const AppComp = () => (
  <React.Fragment>
      <h2>Search for your movie</h2>
      <Form />
      <h2>Movies</h2>
      <Movies />
  </React.Fragment>
);

export default AppComp;