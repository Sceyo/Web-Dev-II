import {useState} from "react"
import './App.css'
import Count from './Components/Count.jsx'
import Navbar from './Components/Navbar.jsx'
import {Routes, Route} from "react-router-dom"
import Home from './Components/Home.jsx'
import List from './Components/List.jsx'
import SpecificList from "./Components/SpecificList.jsx"
import AddList from "./Components/AddList.jsx"

export default function App() {
  

  return (
    <> 
    <div>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "count" element = {<Count/>}/>
          <Route path = "list" element = {<List/>}/>
          <Route path = "specificList" element = {<SpecificList/>} />
          <Route path = "addList" element = {<AddList/>}/>
        </Routes>
    </div>
     

    </>
  )
}


