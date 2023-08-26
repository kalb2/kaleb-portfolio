"use client"
import {useState} from 'react'

const nameList = ["Sam", "Kaleb", "Alex", "Sean"]

export default function UpdateName(){
	const [name, setName] = useState(nameList)

function changeName () {
	setName(currentName => {
		return currentName.slice(1)
	});
}

return (
	<div>
		<button onClick={changeName}>
        Change Name
        </button>
        <br></br>
        {name}
	</div>
)}