import Image from 'next/image'
import Link from 'next/link'
import githublogo from "../assets/github-mark.svg"

export default function NavBar() {
  return (
    <div className="sticky top-0 flex border-b border-black w-full h-14">
    <div className="border-r border-black px-5 h-full flex items-center">
      <Link href="/">KALEB JENSEN</Link>
    </div>
    <div className="border-r border-black p-0 h-full flex flex-1 items-center justify-end" >
      <a href="https://github.com/kalb2" target="_blank">
      <Image src={githublogo} width={45} height={"auto"} alt='github logo' className='mr-5'/>
      </a>
    </div>
    <div className="border-r border-black px-5 h-full flex items-center">
      <Link href="/projects">Projects</Link>
    </div>
    <div className="border-r border-black px-5 h-full flex items-center">
      <Link href="/">Experience</Link>
    </div>
    <div className="border-black px-5 h-full flex items-center">
      <Link href="/">Menu Icon</Link>
    </div>
  </div>
  )
}
