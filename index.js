//javascript
const hexInput = document.getElementById('hexInput');
const inputColor = document.getElementById('inputColor');
const alteredColor = document.getElementById('alteredColor');
const alteredColorText = document.getElementById('alteredColorText');
const slider = document.getElementById('slider');
const sliderText = document.getElementById("sliderText");
const lightenText = document.getElementById("lightenText");
const darkenText = document.getElementById("darkenText");
const toggleBtn = document.getElementById("toggleBtn");


const reset = ()=>{
  sliderText.innerText = '0%';
  slider.value=0;
  alteredColor.style.backgroundColor=hexInput.value;
  alteredColorText.innerText= `Altereed Color ${hexInput.value}`;
}

toggleBtn.addEventListener('click',()=>{

  if (toggleBtn.classList.contains('toggled')){
    toggleBtn.classList.remove('toggled');
    lightenText.classList.remove('unselected');
    darkenText.classList.add('unselected');
  } else {
    toggleBtn.classList.add('toggled');
    lightenText.classList.add('unselected');
    darkenText.classList.remove('unselected');
  }
  reset();
})

hexInput.addEventListener("keyup",()=> {
  const hex= hexInput.value;
  if(!isValidHex(hex)) return;

  const strippedHex = hex.replace('#', '');
   inputColor.style.background='#'+strippedHex;
})

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


  const convertRGBToHex =(r,g,b)=>{
    const array = [r,g,b]
    let text = [];
      for (let i=0; i<array.length; i++){
      text += ("0" + array[i].toString(16)).slice(-2);
      }
      return "#" + text
   }

   const alterColor=(hex,percentage)=>{
    //destructuring
    const {r,g,b}=converterHexToRGB(hex);
    const amount = Math.floor((percentage/100)*255)
    const newR = numberBtw0255(r, amount);
    const newG = numberBtw0255(g, amount);
    const newB = numberBtw0255(b, amount);
    return convertRGBToHex(newR,newG,newB);
   }

   const numberBtw0255=(hex, amount)=>{
    const newHex = hex + amount;
    if (newHex >255) return 255;
    if (newHex <0) return 0;
    return newHex
  }

  slider.addEventListener('input',() => {
    if(!isValidHex(hexInput.value)) return;

     sliderText.textContent = `${slider.value}%`;

     const valueAddition = toggleBtn.classList.contains('toggled') ? -slider.value : slider.value

     const alteredHex = alterColor(hexInput.value, valueAddition);
     alteredColor.style.backgroundColor = alteredHex;
     alteredColorText.innerText = `Altered Color ${alteredHex}`
   })
