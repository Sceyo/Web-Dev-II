
import './App.css'
import {Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home.jsx'
import Add from './Components/Add.jsx'
import List from './Components/listDetail.jsx'

function App() {


  return (
    <>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = 'add' element = {<Add/>}/>
        <Route path = 'list/:listId' element ={<List/>}/>
        
      </Routes>
    </>
  )
}

export default App
