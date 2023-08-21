import React from 'react'
import Card from './Card'

export default function CardRow() {
  return (
    <div className='p-5 flex gap-10'>
        <Card />
        <Card />
    </div>
  )
}
