import React from "react";

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
          <a className="a_Sign_in" href='/LOGIN'>LOGIN</a>

          </span>
          <button>Sign in</button>
        </div>
    );
  }
  export default Sign_in;