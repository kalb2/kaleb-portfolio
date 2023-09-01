"use client"
import { useState } from "react"
import { Child } from "./child"

export default function Effect() {
  const [show, setShow] = useState(true)

  const childComponent = show ? <Child /> : null

  return (
    <div className="flex flex-col items-center">
      <button onClick={() => setShow(currentShow => !currentShow)}>
        Show/Hide
      </button>
      {childComponent}
    </div>
  )
}