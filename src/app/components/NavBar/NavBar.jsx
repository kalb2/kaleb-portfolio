"use client";
import Image from "next/image";
import Link from "next/link";
import githublogo from "../../assets/github-mark.svg";
import kjlogo from "../../assets/KJ-Logo.svg";
import linkedinlogo from "../../assets/LI-In-Bug.png";
import { usePathname } from "next/navigation";
import MenuIcon from "../Menu/MenuIcon";
import Menu from "../Menu/Menu";
import { useState } from "react";

export default function NavBar() {
  const currentRoute = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-20 flex h-14 w-full border-b border-black bg-white">
      <Link href="/">
        <div className="flex h-full items-center border-r border-black px-5 ">
          <Image src={kjlogo} height={50} width={"auto"} alt="My Logo" />
        </div>
      </Link>
      <div className="flex h-full flex-1 items-center justify-end border-r border-black p-0">
        <a href="https://www.linkedin.com/in/kalebjensen/" target="_blank">
          <Image
            src={linkedinlogo}
            width={45}
            height={"auto"}
            alt="my LinkedIn"
            className="invisible mr-5 md:visible"
          />
        </a>
        <a href="https://github.com/kalb2" target="_blank">
          <Image
            src={githublogo}
            width={45}
            height={"auto"}
            alt="my Github"
            className="invisible mr-5 md:visible"
          />
        </a>
      </div>
      <Link
        href="/projects"
        className={
          currentRoute === "/projects" ? "bg-black text-white" : "bg-white"
        }
      >
        <div className="hidden h-full items-center border-r border-black px-5 hover:bg-black hover:text-white md:flex">
          Projects
        </div>
      </Link>
      <Link
        href="/experience"
        className={
          currentRoute === "/experience" ? "bg-black text-white" : "bg-white"
        }
      >
        <div className="hidden h-full items-center border-r border-black px-5 hover:bg-black hover:text-white md:flex">
          Experience
        </div>
      </Link>
      <div
      className="group flex h-full items-center justify-center border-black w-[64px] hover:bg-black cursor-pointer"
      onClick={toggleMenu}
    >
      <MenuIcon isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      {isMenuOpen && <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />}
    </div>
    </div>
  );
}
