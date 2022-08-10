//javascript
const hexInput = document.getElementById('hexInput');
const inputColor = document.getElementById('inputColor');
const slider = document.getElementById('slider');
const sliderText = document.getElementById("sliderText");

slider.addEventListener('input',() => {
  sliderText.textContent = `${slider.value}%`
})

hexInput.addEventListener("keyup",()=> {
  const hex= hexInput.value;
  if(!isValidHex(hex)) return;

  const strippedHex = hex.replace('#', '');
   inputColor.style.background='#'+strippedHex;
}
)
const isValidHex =(hex)=> {
  if(!hex) return false;

  const strippedHex = hex.replace('#', '');
  return strippedHex.length===3 || strippedHex.length===6;
}


const converterHexToRGB=(hex)=>{
  if(!isValidHex(hex)) return null;
  let strippedHex = hex.replace('#', '');

  if(strippedHex.length===3){
    strippedHex = strippedHex[0]+strippedHex[0]+strippedHex[1]+strippedHex[1]+strippedHex[2]+strippedHex[2];
  }


  const r = parseInt(strippedHex.substring(0,2),16);
  const g = parseInt(strippedHex.substring(2,4),16);
  const b = parseInt(strippedHex.substring(4,6),16);
  return{r,g,b}
}


  // if(hex.length===6)
  // {
  //   strippedHex = strippedHex[0]+strippedHex[1]+strippedHex[2]+strippedHex[3]+strippedHex[4]+strippedHex[5];
  // }
  const convertRGBToHex =(r,g,b)=>{
    const array = [r,g,b]
    let text = [];
      for (let i=0; i<array.length; i++){
      text += ("0" + array[i].toString(16)).slice(-2);
      }
      return "#" + text
   }
