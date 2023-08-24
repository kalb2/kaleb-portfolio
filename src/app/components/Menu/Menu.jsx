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
      className={`menu-container fixed bottom-0 right-0 top-0 w-full transform overflow-y-auto bg-white opacity-95 md:w-1/3 ${
        isOpen ? "translate-x-0 border-l-2" : "translate-x-full border-l-0"
      } transition-transform`}
    >
      <button className="absolute right-3 top-3" onClick={toggleMenu}>
        Close
      </button>
      <div className="mt-14 h-[calc(100vh-80px)] border-t">
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
