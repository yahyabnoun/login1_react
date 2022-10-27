

function Validation() {
let inputs =document.querySelectorAll('input')
for (let index = 0; index < inputs.length; index++) {
   if (inputs[index].value==='') return false}
   return true
}
export default Validation;