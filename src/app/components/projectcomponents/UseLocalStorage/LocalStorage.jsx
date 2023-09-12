"use client"
import { useLocalStorage } from "./useLocalStorage"

function LocalStorage() {
    const [firstName, setFirstName] = useLocalStorage("FIRST_NAME", "")
  
    const [lastName, setLastName] = useLocalStorage("LAST_NAME", () => {
      return "Default"
    })
  
    const [hobbies, setHobbies] = useLocalStorage("HOBBIES", () => {
      return ["Programming", "Weight Lifting"];
    });
  
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginBottom: "1rem",
          }}
        >
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            style={{
              border: "0.05em solid black",
              borderRadius: "0.25em",
              padding: "0.25em 0.5em",
              backgroundColor: "#fff",
            }}
          />
        </div>
  
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginBottom: "1rem",
          }}
        >
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            style={{
              border: "0.05em solid black",
              borderRadius: "0.25em",
              padding: "0.25em 0.5em",
              backgroundColor: "#fff",
            }}
          />
        </div>
  
        <div>{hobbies.join(", ")}</div>
        <button
          onClick={() =>
            setHobbies(currentHobbies => [...currentHobbies, "New Hobby"])
          }
        >
          Add Hobby
        </button>
      </>
    )
  }
  
  export default LocalStorage