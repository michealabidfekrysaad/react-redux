import React from "react";
import { Provider } from "react-redux";
// import { render } from "react-dom";
// import Search from "./components/BookForm";
import "./App.css";
import Store from "./js/store/Store";
import AppComp from "./js/components/App";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <AppComp/>
      </div>
       </Provider>
  );
}

export default App;
