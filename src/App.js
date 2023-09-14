import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main.jsx";
import "../src/App.css";

const App = () => {
  return (
    <div className="container">
      <Header></Header>
      <Main></Main>
    </div>
  );
};

export default App;
