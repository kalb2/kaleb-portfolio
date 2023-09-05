"'use client";
import React, { useEffect, useRef, useState } from "react";
import MenuItem from "./MenuItem";
import Modal from "../Modal/Modal";

function Menu({ isOpen, toggleMenu }) {
  const menuRef = useRef(null);


  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        toggleMenu();
      }
    };

    if (isOpen) {
      document.body.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, toggleMenu]);

  return (
    <div>
      <div
        ref={menuRef}
        className={`menu-container fixed bottom-0 right-0 top-0 w-full transform overflow-y-auto bg-white opacity-95 md:w-1/3 ${
          isOpen ? "translate-x-0 border-l-2" : "translate-x-full border-l-0"
        } transition-transform`}
      >
        <div className="flex h-[3.25rem] justify-end border-l">
          <button
            onClick={toggleMenu}
            className=" hover:bg-black hover:text-white w-[64px] px-0 rounded-none border-black "
          >
            <div>X</div>
          </button>
        </div>
        <div className="h-[calc(100vh-3.5rem)] border-t first:border-l">
          <MenuItem
            text="Projects"
            href="/projects"
            src="/Code.png"
            toggleMenu={toggleMenu}
            menuitemnumber="001"
            className="border-l"
          />
          <MenuItem
            text="Experience"
            href="/experience"
            src="/Code.png"
            menuitemnumber="002"
            toggleMenu={toggleMenu}
          />
          <MenuItem
            text="About Me"
            href="/about"
            src="/Code.png"
            menuitemnumber="003"
            toggleMenu={toggleMenu}
          />
          <MenuItem
            text="Blog"
            href="/blog"
            src="/Code.png"
            menuitemnumber="004"
            toggleMenu={toggleMenu}
          />
        </div>
        
      </div>

    </div>
  );
}

export default Menu;
