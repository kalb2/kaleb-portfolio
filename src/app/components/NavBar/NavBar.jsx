"use client";
import Image from "next/image";
import Link from "next/link";
import githublogo from "../../assets/github-mark.svg";
import kjlogo from "../../assets/KJ-Logo.svg";
import linkedinlogo from "../../assets/LI-In-Bug.png";
import { usePathname } from "next/navigation";
import MenuIcon from "../Menu/MenuIcon";
import Menu from "../Menu/Menu";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";

export default function NavBar() {
  const currentRoute = usePathname();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (modalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalOpen]);


  return (
    <div className="sticky top-0 z-20 flex h-[3.25rem] w-full border-b border-black bg-white">
      <Link href="/">
        <div className="flex h-full items-center border-r border-black px-5 ">
          <Image src={kjlogo} height={50} width={"auto"} alt="My Logo" priority />
        </div>
      </Link>

      <div className="flex flex-1 flex-nowrap items-center justify-end py-1 px-1">
        <button
          onClick={openModal}
          className="px-2 py-2 whitespace-nowrap bg-black text-white rounded hover:bg-blue-600"
        >
          Contact Me
        </button>
        <Modal isOpen={modalOpen} onClose={closeModal}>
          <div>
            <p>
              Email:{" "}
              <a
                href="mailto:your.email@example.com"
                className="hover:underline text-blue-600"
              >
                kalebcj@gmail.com
              </a>
            </p>
          </div>
        </Modal>
      </div>

      <div className="hidden lg:flex h-full items-center justify-end border-r border-black px-3 gap-3">
        <a href="https://www.linkedin.com/in/kalebjensen/" target="_blank">
          <Image
            src={linkedinlogo}
            width={45}
            height={"auto"}
            alt="my LinkedIn"
          />
        </a>
        <a href="https://github.com/kalb2" target="_blank">
          <Image src={githublogo} width={45} height={"auto"} alt="my Github" />
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
