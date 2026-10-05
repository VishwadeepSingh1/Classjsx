import React, { useState } from 'react'
import cat from "../Components/image.png";
function ChangeBgColour() {

  const[count,setCount]=useState(100);
  const[red,setRed]=useState(0);
  const[green,setGreen]=useState(0);
  const[blue,setBlue]=useState(0);
  const[catHeight,setCatHeight]=useState(120);
  const[catWidth,setCatWidth]=useState(100);
   const[catAngle,setCatAngle]=useState(30);
  
  function changeBGColur(){
   setRed(Math.random()*255);
    setGreen(Math.random()*255);
     setBlue(Math.random()*255);
    
}
function enhanceHeight(){
   setCatHeight(catHeight+10);
}
function enhanceWidth(){
   setCatWidth(catHeight+10);
}
function imageRotate(){
 setCatAngle(catAngle+10);

}

  return (
    <div >
      <center>
     <div style={{backgroundColor:`rgb(${red},${green},${blue})`,border:"2px solid red",height:"13rem",width:"12rem",marginLeft:"400px"}}>
      <img src={cat} height={catHeight} width={catWidth} style={{transform:`rotate(${catAngle}deg)`}}  />
     </div>
     <div>
      <button onClick={changeBGColur} style={{marginLeft:"400px"}}>ChangeBgColur</button>
         <button onClick={enhanceHeight} style={{marginLeft:"400px"}}>Enhance Height</button>
         <button onClick={enhanceWidth} style={{marginLeft:"400px"}}>Enhance Height</button>
         <button onClick={imageRotate} style={{marginLeft:"400px"}}>IMAGEROTATE</button>
    
     </div>
       </center>
     </div>
  )
}

export default ChangeBgColour