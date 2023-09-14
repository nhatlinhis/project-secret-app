// import react, { useState } from "react";
// import SocialIconsMood from "../SocialIconsMood/SocialIconsMood";
// import "./Nav.css";

// const Nav = () => {
//   const [isMoodActive, setIsMoodActive] = useState(false);

//   const handleMoodItemClick = () => {
//     setIsMoodActive(!isMoodActive);
//   };
//   return (
//     <div>
//       <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Skill</li>
//         <li>Services</li>
//         <li>Portfolio</li>
//         <li>Contact me</li>
//         <li
//           className={`mood-item ${isMoodActive ? "mood" : ""}`}
//           onClick={handleMoodItemClick}
//         >
//           <SocialIconsMood></SocialIconsMood>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Nav;

import React from "react";
import SocialIconsMood from "../SocialIconsMood/SocialIconsMood";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <ul className="mood-header">
        <li>Home</li>
        <li>About</li>
        <li>Skill</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact me</li>
        <li className="mood-item">
          <SocialIconsMood></SocialIconsMood>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

const moodItem = document.querySelector(".mood-item");
const bodyVery = document.querySelector("#body");

moodItem.addEventListener("click", () => {
  bodyVery.classList.toggle("mood");
});
