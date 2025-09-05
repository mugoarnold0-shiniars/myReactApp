import { useState } from "react"

const Ninthcomponent = () => {
    let[number,setNumber]=useState(0)
    let price =30
  return (
    <div>
      <h1>Welcome to mt Ninth component</h1>\
      <h4>The number is:{number}</h4>
      <h4>The the total price is:{price*number}</h4>
      <button
      onClick={()=>{
        setNumber(number+1)
      }}
      
      >+</button>
      <button
     onClick={()=>{
        setNumber(number-1)
     }} 
      > -</button>
    </div>
  )
}

export default Ninthcomponent
