import React, { useState } from "react";
import './Inputform.css'
function Inputform() {
  const [password, setPassword] = useState(null);
  const [strong, setStrong] = useState(null);
  const [isChecked , setIschecked] = useState(false) ; 
  
  function validatePassword(password) {
   // setPassword(e.target.value) ; 
    console.log("input password", password, typeof password);
    let isChar = false;
    let isNum = false;
    let isSpecialChar = false;
    String(password).toLowerCase();
    for (let i in password) {
      console.log(password[i]);
      let ch = password[i];
      if (ch >= "a" || ch <= "z") {
        isChar = true;
      }
      if (ch == "@" || ch == "#" || ch == "$") {
        isSpecialChar = true;
      }
      if (ch >= "0" || ch <= "9") {
        isNum = true;
      }
    }
     if (isChar && isNum && isSpecialChar) {
        setStrong(true);
      }
     else {
      setStrong(false);
     }
  }

  function hanleOnclick(e) {
    e.preventDefault();
    validatePassword(password);
    setIschecked(true) ; 
  }

  return (
    <div className="FormArea">
      <form className="Form" action="">
        <label placeholder=" Password" htmlFor="">
          Enter your Password
        </label>
        <input type="text" onChange={e => setPassword(e.target.value)} />
        {/* <input type="text" onChange={handleInput} /> */}

        <button type="submit" onClick={hanleOnclick}>
          Check
        </button>
      </form>

      {strong && password && (
        <div className="validateMessage">
          <p>Password is strong {password}</p>
          
        </div>
      )}
      {!strong && isChecked && password && (
        <div className="validateMessage">
          <p>Password is not strong {password}</p>
        </div>
      )}
    </div>
  );
}

export default Inputform;
