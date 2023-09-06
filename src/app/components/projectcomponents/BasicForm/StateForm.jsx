"use client"
import  { useState, useMemo, useId } from "react";
import "./styles.css";
import { checkEmail, checkPassword } from "./validators";

const StateForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false);
  const id = useId()

  const emailErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkEmail(email) : []
  }, [isAfterFirstSubmit, email])

  const passwordErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkPassword(password) : []
  }, [isAfterFirstSubmit, password])


  function onSubmit(e) {
    e.preventDefault ()
    setIsAfterFirstSubmit(true)

    const emailResults = checkEmail(email)
    const passwordResults = checkPassword(password)

    if (emailResults.length === 0 && passwordResults.length === 0){
      alert("Success")
    }

  }

  return (
    <form onSubmit={onSubmit} className="form">
      <div className={`form-group ${emailErrors.length > 0 ? "error" : ""}`}>
        <label className="label" htmlFor={`${id}-email`}>
          Email
        </label>
        <input
          className="input"
          type="email"
          id={`${id}-email`}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {emailErrors.length > 0 && (
          <div className="msg">{emailErrors.join(", ")}</div>
         )}
      </div>
      <div className={`form-group ${passwordErrors.length > 0 ? "error" : ""}`}>
        <label className="label" htmlFor={`${id}-password`}>
          Password
        </label>
        <input
          className="input"
          type="password"
          id={`${id}-password`}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      {passwordErrors.length > 0 && (
          <div className="msg">{passwordErrors.join(", ")}</div>
         )}
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default StateForm;
