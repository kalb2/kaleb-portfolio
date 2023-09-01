import { useEffect, useState } from "react"

export function Child() {
  const [age, setAge] = useState(0)
  const [name, setName] = useState("")

  useEffect(() => {
    console.log("Re-Render")
  })

  useEffect(() => {
    console.log("Hi")

    return () => {
      console.log("Bye")
    }
  }, [])

  useEffect(() => {
    console.log(`My name is ${name} and I am ${age} years old`)
  }, [name, age])

  useEffect(() => {
    document.title = name

    const timeout = setTimeout(() => {
      console.log(`My name is ${name}`)
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [name])

  return (
    <div className="flex flex-col items-center">
      <input type="text" value={name} onChange={e => setName(e.target.value)} className="bg-[#efefef] border" />
      <br />
      <div>
      <button onClick={() => setAge(a => a - 1)}>-</button>
      {age}
      <button onClick={() => setAge(a => a + 1)}>+</button>
      </div>
      <br />
      My name is {name} and I am {age} years old.
    </div>
  )
}