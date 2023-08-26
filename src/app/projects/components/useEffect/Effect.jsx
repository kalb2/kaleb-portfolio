import { useState } from "react"
import { Child } from "./child"

export default function Effect() {
  const [show, setShow] = useState(true)

  const childComponent = show ? <Child /> : null

  return (
    <div>
      <button onClick={() => setShow(currentShow => !currentShow)}>
        Show/Hide
      </button>
      {childComponent}
    </div>
  )
}