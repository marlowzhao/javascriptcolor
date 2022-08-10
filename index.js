//javascript
const isValidHex =(hex)=> {
  if(!hex) return false;

  const strippedHex = hex.replace('#', '')
  return strippedHex.length===3 || strippedHex.length===6;
}

const hexInput = document.getElementById('hexInput');
const inputColor = document.getElementById('inputColor');


hexInput.addEventListener("keyup",()=> {
  const hex= hexInput.value
  if(!isValidHex(hex)) return;

   inputColor.style.background=hex;
}
)
