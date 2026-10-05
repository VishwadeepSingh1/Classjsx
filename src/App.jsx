import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import StateHandeling from './Components/StateHandeling'
import ICardFamily from './Components/ICardFamily'
import ChangeBgColour from './Components/ChangeBgColour'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div >
 {/* <ICardFamily></ICardFamily> */}
 {/* <StateHandeling/> */}
 <ChangeBgColour/>

   </div> 
  )
}

export default App
