import React from "react";

function Login() {
    return (
        <div className="main">
          <div>
            <h2>LOGIN</h2>
          </div>
          <div>
            <label>User Name </label>
            <input type={"text"}></input>
          </div>
          <div>
            <label>Password</label>
            <input type={"text"}></input>
          </div>
          <span>
          <a href=''>forgot password ?</a>
          <a  href='/Sign_in'>Sign in</a>

          </span>

          <button>LOGIN</button>
        </div>
    );
  }
  
  export default Login;