import "./BottomFixNav.scss";
import React, { useState, useEffect } from "react";

import { IoIosArrowUp } from "react-icons/io";
const BottomFixNav = () => {

const onClick = () => {
    window.scrollTo(0, 0)
}

  const [yOffSet, setYoffSet] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        if (window.pageYOffset > 50) {
          setYoffSet(true);
        } else {
          setYoffSet(false);
        }
      },
      []
    );
  });
  return (
    <div className="BottomFixNav-container">
      <div className={yOffSet === true ? "visible" : 'non-visible'}>
        <button className="bottom-nav-button" onClick={onClick}>
          <IoIosArrowUp className="bottom-nav-icon" />
        </button>
      </div>
    </div>
  );
};

export default BottomFixNav;
