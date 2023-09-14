import React from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import "../MainTitle/MainTitle.css";

const MainTitle = () => {
  return (
    <section>
      <div className="section-title">
        <h1>Hi I'm Linh</h1>
        <h5>Fresher Frontend developer</h5>
      </div>
      <p>
        High level experience in web design and devoloment knowledge, prodiong
        quality.
      </p>
      <button>
        Contact me
        <IoMdArrowDropdownCircle></IoMdArrowDropdownCircle>
      </button>
    </section>
  );
};

export default MainTitle;
