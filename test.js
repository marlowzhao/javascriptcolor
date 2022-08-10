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
    const newR = r + amount;
    const newG = g + amount;
    const newB = b + amount;
    return convertRGBToHex(newR,newG,newB);
   }

   const numberBtw0255=(hex, amount)=>{
    const newHex = hex + amount;
    if (newHex >255) return 255;
    if (newHex <0) return 0;
    return newHex
  }
  
   console.log(alterColor('000',10));
