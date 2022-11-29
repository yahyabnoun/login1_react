



///////////////////////////////////////////////////////


export function Validation() {
let inputs =document.querySelectorAll('input')
for (let index = 0; index < inputs.length; index++) {
   if (inputs[index].value==='') return false}
   return true
}


///////////////////////////////////////////////////////


export function saveAccounts(Account) {
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


 export function Sign_in_valid() {

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


   export   function Login_valid() {

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
