import React, { useState } from "react";
import './Inputform.css'
function Inputform() {
  const [password, setPassword] = useState("");
  const [strong, setStrong] = useState(null);
  const redColor = {
    color:"red" ,
  }
  function validatePassword(password) {
   // setPassword(e.target.value) ; 
    console.log("input password : ", password);
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


  function changePasswordHandler (e) {
    setPassword( e.target.value ) ;  
    validatePassword(password);
  }

  return (
    <div className="FormArea" >
      <form className="Form" action="">
        <label placeholder=" Password" htmlFor="">
          Enter your Password
        </label>
        <input type="text" onChange={changePasswordHandler} />
        {/* <input type="text" onChange={handleInput} /> */}
        {strong && password &&   (
          <div className="validateMessage">
            <p>Password is strong {password}</p>
          </div>
        )}
        {!strong && password && (
          <div className="validateMessage" >
            <p style={redColor}>Password is not strong : {password}</p>
          </div>
        )}
  
      </form>

      
    </div>
  );
}

export default Inputform;
