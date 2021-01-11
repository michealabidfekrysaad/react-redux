import React from "react";
import Form from "./Form";
import Movies from "./Movies";

const AppComp = () => (
  <React.Fragment>
    <div>
      <h2>Search for your movie</h2>
      <Form />
    </div>
    <div>
      <h2>Movies</h2>
      <Movies />
    </div>
  </React.Fragment>
);

export default AppComp;