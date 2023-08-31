import React from 'react'
import { H1 } from '@/app/styles/components'

export default function TitleBar({text}) {
  return (
    <div className="flex w-full bg-white text-black border-b border-b-black">
    <H1 className="uppercase tracking-tighter">{text}</H1>
  </div>
  )
}
