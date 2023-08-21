import React from 'react'

export default function TitleBar({text}) {
  return (
    <div className="flex w-full border-b p-1">
    <h1 className="text-6xl uppercase tracking-widest">{text}</h1>
  </div>
  )
}
