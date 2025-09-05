import { useState } from "react"

const Seventhcomponent = () => {
    // Bellow we initialize our hooks 
    const [number,setNumber]= useState(10)
    const[weight,setWeight]=useState(60)
  return (
    <div>
        <h3>Wlcome to my Seventh Component</h3>

        <h3>The number is:{number}</h3>
        <button 
        onClick={()=>{
            setNumber(50)
        }}
        
        
        >click to change the number </button>
        
        <h3>The weight is:{weight}</h3>
        <button
        onClick={()=>{
            setWeight(75)
        }}
        
        
        >Click to change weight</button>
        
      
    </div>
  )
}

export default Seventhcomponent
