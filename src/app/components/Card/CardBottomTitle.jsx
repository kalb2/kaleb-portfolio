import React from 'react'

export default function CardBottomTitle({title}) {
  return (
    <div className="border-t p-3 bg-white block w-full ">
    <h3 className="uppercase text-3xl tracking-tighter pl-2">{title}</h3>
  </div>
  )
}
