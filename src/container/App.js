import React from "react";
import SearchInput from "../components/SearchInput/SearchInput";
import Books from "../components/Books/Books";
import "./App.css";

const AppComp = () => (
  <main className="App">
      <h2>Search for your Book</h2>
      <SearchInput />
      <h2>Books</h2>
      <Books />
  </main>
);

export default AppComp;