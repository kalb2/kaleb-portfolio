import Image from 'next/image'
import Link from 'next/link'
import githublogo from "../assets/github-mark.svg"
import kjlogo from "../assets/KJ-Logo.svg"
import linkedinlogo from "../assets/LI-in-Bug.png"

export default function NavBar() {
  return (
    <div className="sticky top-0 flex border-b bg-white border-black w-full h-14">
    <div className="border-r border-black px-5 h-full flex items-center">
      <Link href="/">
        <Image src={kjlogo} height={50} width={"auto"} alt='My Logo' />
      </Link>
    </div>
    <div className="border-r border-black p-0 h-full flex flex-1 items-center justify-end" >
      <a href="https://www.linkedin.com/in/kalebjensen/" target="_blank">
      <Image src={linkedinlogo} width={45} height={"auto"} alt='my LinkedIn' className='mr-5'/>
      </a>
      <a href="https://github.com/kalb2" target="_blank">
      <Image src={githublogo} width={45} height={"auto"} alt='my Github' className='mr-5'/>
      </a>
    </div>
    <div className="border-r border-black px-5 h-full flex items-center">
      <Link href="/projects" className=' active:underline'>Projects</Link>
    </div>
    <div className="border-r border-black px-5 h-full flex items-center">
      <Link href="/experience">Experience</Link>
    </div>
    <div className="border-black px-5 h-full flex items-center">
      <Link href="/">Menu Icon</Link>
    </div>
  </div>
  )
}
