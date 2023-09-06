import React from 'react'

export default function TitleBar({text}) {
  return (
    <div className="flex w-full bg-white text-black border-b border-b-black">
    <h1 className="tracking-tighter">{text}</h1>
  </div>
  )
}
