import React from 'react'

const User = ({name, email, username, phone}) => {
  return (
    <li>{name}, {email}, {username}, {phone}</li>
    
    )
}

export default User