// const convertRGBToHex =(r,g,b)=>{
//  const firstPair =("0" + r.toString(16)).slice(-2);
//  const secondPair =("0" + g.toString(16)).slice(-2);
//  const thirdPair =("0" + b.toString(16)).slice(-2);

//  const hex = "#"+ firstPair+secondPair+thirdPair;
//  return hex
// }

// console.log(convertRGBToHex(0,255,255))

const convertRGBToHex =(r,g,b)=>{
  const array = [r,g,b]
  let text = [];
    for (let i=0; i<array.length; i++){
    text += ("0" + array[i].toString(16)).slice(-2);
    }
    return "#" + text
 }
 console.log(convertRGBToHex(0,255,255))
