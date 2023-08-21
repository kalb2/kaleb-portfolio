"use client";
import Image from "next/image";
import Link from "next/link";
import githublogo from "../assets/github-mark.svg";
import kjlogo from "../assets/KJ-Logo.svg";
import linkedinlogo from "../assets/LI-In-Bug.png";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const currentRoute = usePathname();

  return (
    <div className="sticky top-0 flex border-b bg-white border-black w-full h-14">
      <Link href="/">
        <div className="border-r border-black px-5 h-full flex items-center ">
          <Image src={kjlogo} height={50} width={"auto"} alt="My Logo" />
        </div>
      </Link>
      <div className="border-r border-black p-0 h-full flex flex-1 items-center justify-end">
        <a href="https://www.linkedin.com/in/kalebjensen/" target="_blank">
          <Image
            src={linkedinlogo}
            width={45}
            height={"auto"}
            alt="my LinkedIn"
            className="mr-5"
          />
        </a>
        <a href="https://github.com/kalb2" target="_blank">
          <Image
            src={githublogo}
            width={45}
            height={"auto"}
            alt="my Github"
            className="mr-5"
          />
        </a>
      </div>
      <Link
        href="/projects"
        className={
          currentRoute === "/projects" ? "bg-black text-white" : "bg-white"
        }
      >
        <div className="border-r border-black px-5 h-full flex items-center">
          Projects
        </div>
      </Link>
      <Link
        href="/experience"
        className={
          currentRoute === "/experience" ? "bg-black text-white" : "bg-white"
        }
      >
        <div className="border-r border-black px-5 h-full flex items-center">
          Experience
        </div>
      </Link>
      <div className="border-black px-5 h-full flex items-center">
        <Link href="/">Menu Icon</Link>
      </div>
    </div>
  );
}
