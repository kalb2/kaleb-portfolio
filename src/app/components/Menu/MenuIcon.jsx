import React, { useState } from "react";

function MenuIcon({ isOpen, toggleMenu }) {
  return (
    <div
      className={`menu-icon w-6 h-6 flex flex-col justify-between cursor-pointer ${
        isOpen ? "open" : ""
      }`}
      onClick={toggleMenu}
    >
      <div className="bar bg-black group-hover:bg-white h-1 rounded"></div>
      <div className="bar bg-black group-hover:bg-white h-1 rounded"></div>
      <div className="bar bg-black group-hover:bg-white h-1 rounded"></div>
    </div>
  );
}

export default MenuIcon;
