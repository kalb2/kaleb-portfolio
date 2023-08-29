"use client"
import { useState } from 'react'
import React from 'react'

function Counter () {
   const [count, setCount] = useState(0)

    return (
    <h1 onClick={() => setCount(currentCount => currentCount + 1)}>
        {count}
    </h1>
  )
}

export default Counter