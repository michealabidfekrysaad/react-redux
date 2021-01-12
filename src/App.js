import React from "react";
import { Provider } from "react-redux";
// import { render } from "react-dom";
// import Search from "./components/BookForm";
import "./App.css";
import Store from "./store/Store";
import AppComp from "./container/App";

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
