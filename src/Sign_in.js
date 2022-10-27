import React from "react";
import {Link} from "react-router-dom";
import Validation from './Validation'


function Sign_in_valid() {

if (Validation()) {
  
  alert('valide')
}else{
  alert('invalide')
}
  
}

function Sign_in() {
    return (
        <div className="main">
          <div>
            <h2>Sign in</h2>
          </div>
          <div>
            <label>User Name </label>
            <input type={"text"}></input>
          </div>
          <div>
            <label>Password</label>
            <input type={"text"}></input>
          </div>
          <div>
            <label>confirm your password</label>
            <input type={"text"}></input>
          </div>
          <span>
          <Link className="a_SignIn_LOGIN" to='/LOGIN'>Login</Link>

          </span>
          <button onClick={Sign_in_valid}>Sign in</button>
        </div>
    );
  }
  export default Sign_in;