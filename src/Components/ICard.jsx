import React from 'react'
import css from "./ICard.module.css"

function ICard(props) {
  return (
      <div style={{border:"5px solid red"}}>
   <center> <img src={props.data.pic} height={100} width={120} alt="" /></center> 
      <h2>Roll:{props.data.roll}</h2>
      <h2>Name:{props.data.Name}</h2>
      <h2>Branch:{props.data.Branch}</h2>
      <h2>College:{props.data.College}</h2>
      </div>
  )
}

export default ICard