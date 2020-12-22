import coverImage from "../../assets/cover/cover.png";
import React from "react";

function Header(props) {
  return (
    <header className="flex-row space-between px-1">
      <h1>Matt Brassey</h1>
      <img src={coverImage} alt="header background"></img>
      {props.children}
    </header>
  );
}

export default Header;
