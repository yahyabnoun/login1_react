import React from "react";
import {Link} from "react-router-dom";
import Validation from './Validation'

///////////////////////////////////////////////////////


function saveAccounts(Account) {
  //CHECK --- HEY DO I already have thing in there?
  let Accounts
  if (localStorage.getItem('Accounts')===null) {
    Accounts=[]
      
  }
  else{
    Accounts=JSON.parse(localStorage.getItem('Accounts'))
  }
  Accounts.push(Account)
  localStorage.setItem('Accounts',JSON.stringify(Accounts))
}

///////////////////////////////////////////////////////

function Sign_in_valid() {

if (Validation()) {
const input1=document.querySelectorAll('input')[0].value
const input2=document.querySelectorAll('input')[1].value

const Accounts=JSON.parse(localStorage.getItem('Accounts'))||"[]"

if (Accounts.length>0) {
  for (let index = 0; index < Accounts.length; index++) {
      if (Accounts[index].name===input1) {
        alert('Sign in insuccessfully!')

        return
      }
      
  }
  saveAccounts({
    name:input1,
    passeword:input2
  })
  alert('Sign in successfully!')

  
}


 

}else{
  alert('invalide')
}
  
}
///////////////////////////////////////////////////////

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