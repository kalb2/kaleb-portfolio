import React from 'react'

export default function WhiteTitleBar({text}) {
  return (
    <div className="flex w-full p-1 bg-white text-black border-b border-b-black">
    <h1 className="text-6xl uppercase tracking-widest">{text}</h1>
  </div>
  )
}
