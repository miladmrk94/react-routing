import React from "react";
import Navigation from "./Navigation";
const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#214687",
        width: "100%",
        height: "90px",
        padding: "20px",
      }}
    >
      <Navigation />
    </header>
  );
};

export default Header;
