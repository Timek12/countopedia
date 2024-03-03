import React from "react";
import logo from "./images/react.png";

const Header = () => {
  return (
    <div className="container row py-2">
      <img src={logo} alt="" className="w-10 col-2" ></img>
      <div className="h2 pt-4 text-black-50 col-10">React Course - CountOpedia</div>
    <hr></hr>
    </div>
  );
};

export default Header;
