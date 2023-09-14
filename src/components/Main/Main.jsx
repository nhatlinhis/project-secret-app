import React from "react";
import MainIcons from "../MainIcons/MainIcons";
import "../Main/Main.css";
import MainTitle from "../MainTitle/MainTitle";
import MainImage from "../MainImage/MainImage";

const Main = () => {
  return (
    <main>
      <MainIcons></MainIcons>
      <article>
        <MainTitle></MainTitle>
        <MainImage></MainImage>
      </article>
    </main>
  );
};

export default Main;
