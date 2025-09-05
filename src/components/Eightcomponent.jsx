import React, { useState } from 'react'

const Eightcomponent =
 () => {
    const [height,setHeight]=useState("1.73meters")
    const [pressure,setPressure]=useState(65)
  return (
    <div>
        <h3 >The height of the person is:{height}</h3>
        <button
        onClick={()=>{
            setHeight("1.75meters")
        }}
        
        >Click to change your height</button>
        <h3>the pressure of the person is:{pressure}</h3>
        <button
        onClick={()=>{
            setPressure(70)
        }}
        
        >Click to change your height</button>
      
    </div>
  )
}

export default Eightcomponent
