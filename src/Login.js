import React from "react";
import {Link} from "react-router-dom";
import Validation from './Validation'


///////////////////////////////////////////////////////

function Login_valid() {

  if (Validation()) {
  const input1=document.querySelectorAll('input')[0].value
  const input2=document.querySelectorAll('input')[1].value
  
  const Accounts=JSON.parse(localStorage.getItem('Accounts'))||"[]"
  if (Accounts.length>0) {
    for (let index = 0; index < Accounts.length; index++) {
        if (Accounts[index].name===input1 && Accounts[index].passeword===input2) {
          alert('Login successfully!')
          return
        }
    }
  }
  alert('this Account does not execute')
  }
  else{
    alert('invalide')
  }
    
}
  ///////////////////////////////////////////////////////


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

          <button onClick={Login_valid}>LOGIN</button>
        </div>
    );
  }
  
export default Login;