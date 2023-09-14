import React from "react";
import "../MainIcons/MainIcons.css";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiFacebook } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

const MainIcons = () => {
  return (
    <div className="icons-socil">
      <a href="https://www.linkedin.com/in/nhatlinhis/">
        <SlSocialLinkedin></SlSocialLinkedin>
      </a>
      <a href="https://www.facebook.com/nguynnhtlinh1802/">
        <FiFacebook></FiFacebook>
      </a>
      <a href="https://github.com/nhatlinhis">
        <FiGithub></FiGithub>
      </a>
    </div>
  );
};

export default MainIcons;
