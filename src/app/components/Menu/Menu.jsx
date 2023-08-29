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
      <div className="flex h-14 justify-end">
        <button
          onClick={toggleMenu}
          className=" hover:bg-black hover:text-white w-[64px] px-0 rounded-none border-black"
        >
          <div>Close</div>
        </button>
      </div>
      <div className="h-[calc(100vh-80px)] border-t">
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
