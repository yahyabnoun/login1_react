

function Validation() {
let inputs =document.querySelectorAll('input')
console.log(inputs);
for (let index = 0; index < inputs.length; index++) {
   if (document.querySelectorAll('input')[index].value==='' ) return false
}







return true


}

export default Validation;