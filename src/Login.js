import React from "react";
import {Link} from "react-router-dom";


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
          <Link to=''>forgot password ?</Link>
          <Link className="a_SignIn_LOGIN" to='/Sign_in'>Créer un compte</Link>

          </span>

          <button>LOGIN</button>
        </div>
    );
  }
  
  export default Login;