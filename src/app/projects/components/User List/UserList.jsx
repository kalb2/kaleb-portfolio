"use client"
import { useEffect, useState } from "react"
import User from "./User"

function UserList() {
  const [isLoading, setIsLoading] = useState(true)
  const [users, setUsers] = useState([])

  useEffect(() => {
    setIsLoading(true)

    const controller = new AbortController()
    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then(res => res.json())
      .then(setUsers)
      .finally(() => {
        setIsLoading(false)
      })

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <>
      <h1>User List</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {users.map(user => {
            return <User 
              key={user.id}
              {...user} 
              
              />
          })}
        </ul>
      )}
    </>
  )
}

export default UserList