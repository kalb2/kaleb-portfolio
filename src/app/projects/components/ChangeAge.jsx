import React from 'react'
import { useState, useEffect } from 'react'

const ChangeAge = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)

useEffect(() => {
    console.log("Age Changed", age)
}, [age]
)

  return (
    <div>
    <div>
        <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
        <br></br>
        <br />
        <button onClick={() => setAge(currentCount => currentCount - 1)} >-</button>
        
        {age}
        <button onClick={() => setAge(currentCount => currentCount + 1)}>+</button>
    </div>
    <div>
        <h2>'My name is {name} and I am {age} years old'</h2>
    </div>
    </div>
  )
}

export default ChangeAge