import React from "react";
import { Provider } from "react-redux";
// import { render } from "react-dom";
// import Search from "./components/BookForm";
import "./App.css";
import AppComp from "./container/App";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppComp/>
      </div>
       </Provider>
  );
}

export default App;
