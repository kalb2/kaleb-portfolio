import React, { useEffect, useRef } from "react";
import MenuItem from "./MenuItem";

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
    <div
      ref={menuRef}
      className={`menu-container fixed top-0 bottom-0 right-0 w-full md:w-1/3 bg-white opacity-95 overflow-y-auto transform ${
        isOpen ? "translate-x-0 border-l-2" : "translate-x-full border-l-0"
      } transition-transform`}
    >
      <button className="absolute top-3 right-3" onClick={toggleMenu}>
        Close
      </button>
      <div className="h-[calc(100vh-80px)] border-t mt-14">
        <MenuItem
          text="Projects"
          href="/projects"
          src="/Code.png"
          toggleMenu={toggleMenu}
        />
        <MenuItem
          text="Experience"
          href="/experience"
          src="/Code.png"
          toggleMenu={toggleMenu}
        />
        <MenuItem
          text="About Me"
          href="/about"
          src="/Code.png"
          toggleMenu={toggleMenu}
        />
        <MenuItem
          text="Blog"
          href="/blog"
          src="/Code.png"
          toggleMenu={toggleMenu}
        />
      </div>
    </div>
  );
}

export default Menu;
