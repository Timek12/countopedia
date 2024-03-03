import React from "react";
import logo from "./images/react.png";

const Header = () => {
  return (
    <div className="container row ">
      <img src={logo} alt="" className="col-2" ></img>
      <div className="h1 pt-4 text-white-50 col-10">CountOpedia</div>
    <hr></hr>
    </div>
  );
};

export default Header;
