import React from 'react'

export default function CardBottomTitle({title}) {
  return (
    <div className="border-t p-3 bg-white block w-full ">
    <p className="uppercase text-3xl tracking-tighter pl-2">{title}</p>
  </div>
  )
}
