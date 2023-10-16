import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Delete from './Components/Delete';
import Update from './Components/Update';
import Edit from './Components/Edit';
import Input from './Components/Input';

function App() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);
  const [upIndex, updateIndex] = useState(null)
  const [upInput, updateInput] = useState(''); 


  return (
    <>
      <div className="container">
        <h1>To Do List</h1>
       

        <div className="input-group mb-3">
        
           <Input items = {items} setItems = {setItems} input = {input} setInput = {setInput}/>
          </div>

        <ul className="list-group">
          <br></br>
          <h1>List: </h1>
          {items.map((item, index) => (
            <li key={index} className="list-group-item">
              {upIndex === index ? (
                <>
                <Update items = {items} index = {index} updateInput = {updateInput} setItems = {setItems} updateIndex={updateIndex} upInput={upInput}/>
                </>
              ) : (
                <>
                  {item}
                  <br></br>
                  <Delete items = {items} setItems = {setItems} index = {index}/>
                  <Edit items = {items} index = {index} updateIndex={updateIndex} updateInput={updateInput}></Edit>
                </>
              )}
            </li>
          ))}
        </ul> 

      </div>
    </>
  )
}

export default App;
