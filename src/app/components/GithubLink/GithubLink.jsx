import React from 'react'
import ghlogowhite from "../../../../public/github-mark-white.svg";
import Image from 'next/image';

export default function GithubLink({href}) {
  return (
    <div className='flex items-center'>
    <a href={href} target='_blank'>
    <button  className='flex gap-5' >
        <Image priority src={ghlogowhite} alt="Github Logo" height={30} width={30} />
        <p className='self-center'>View on Github</p>
    </button>
    </a>
    </div>
  )
}
