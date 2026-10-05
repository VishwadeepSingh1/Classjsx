import react from "react"
import ICard from "./ICard";
import ANIMAL from "../Components/ANIMAL.avif"
function ICardFamily(){
    const student=[
        {
      
         pic:ANIMAL,
         roll:"2400320101282",
           
          Name:"Vishwadeep",
           Branch:"CSE",
            College:"ABES"
    },
      {
      
         pic:ANIMAL,
         roll:"2400320101282",
           
          Name:"Vishwadeep",
           Branch:"CSE",
            College:"ABES"
    },
]
    return <div style={{display:'flex',border:"solid black",width:"50rem",height:"23rem", margin:"3rem"}}>
        {
       student.map((ele)=>(
        <ICard data={ele}></ICard>
       ))
}
 </div>
}
export default ICardFamily;