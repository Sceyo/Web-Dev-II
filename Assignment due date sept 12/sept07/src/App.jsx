import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [input,setValue] = useState('');
  const [items,setItems] = useState([]);

  const inputValue = (e) => {
    setValue(e.target.value);
  }

  const addButton = () =>{
    if(input.trim() !== ''){
      setItems([...items,input]);
      setValue('');
    }
  }

  return (
    <>
    <div className = "container">
    <h1>To Do List</h1>
     
      <div className="input-group mb-3">
        <input type="text" className="form-control" id="exampleFormControlInput1" value = {input} onChange = {inputValue}/>
        <button type="button" className="btn btn-success" onClick = {addButton}>Add</button>

      </div>
      <ul className="list-group">
        <br></br>
        <h1>List: </h1>
        {items.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    
    </div>
    </>
  )
}

export default App
