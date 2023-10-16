import {useState} from "react"
import Navbar from "./Navbar"

export default function Count() {
  
  const [num, setNum] = useState(0)

  const minusNum = () =>{
      setNum(num - 1)
  }

  const addNum = () =>{
    setNum(num + 1)
  }

  const pressMe = () =>{
    if(num % 2 == 0){
        setNum(num + 10)
    }else{
        setNum(num - 10)
    }
  }
  

  return (
    <>
    <Navbar/>
      <button onClick = {minusNum}>-</button>
      <span>{num}</span>
      <button onClick = {addNum}>+</button>
      <br/>
      <button onClick = {pressMe}>Press me</button>
    </>
  )
}


