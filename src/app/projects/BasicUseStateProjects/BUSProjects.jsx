import ArrayState from '@/app/components/projectcomponents/ArrayState/arrayState'
import ChangeAge from '@/app/components/projectcomponents/UseState/ChangeAge'
import Counter from '@/app/components/projectcomponents/UseState/counter'
import UpdateName from '@/app/components/projectcomponents/UseState/updateName'
import React from 'react'

export default function BUSProjects() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 basis-2/3 overflow-auto">
    <div className="flex flex-col items-center border-b sm:border-r ">
      <div className="border-b w-full text-center text-2xl h-10 py-1">
        Simple Counter
      </div>
      <div className="flex-grow flex items-center justify-center py-2">
        <Counter />
      </div>
    </div>
    <div className="flex flex-col items-center border-b ">
      <div className="border-b w-full text-center text-2xl h-10 py-1">
        Change On Input
      </div>
      <div className="flex-grow flex items-center justify-center py-2">
        <ChangeAge />
      </div>
    </div>

    <div className="flex flex-col items-center sm:border-r border-b sm:border-b-0">
      <div className="border-b w-full text-center text-2xl h-10 py-1">
        Single Array State
      </div>
      <div className="flex-grow flex items-center justify-center py-2">
        <UpdateName />
      </div>
    </div>
    <div className="flex flex-col items-center ">
      <div className="border-b w-full text-center text-2xl h-10 py-1">
        Mult. Array States
      </div>
      <div className="flex-grow flex items-center justify-center py-2">
        <ArrayState />
      </div>
    </div>
  </div>
  )
}
