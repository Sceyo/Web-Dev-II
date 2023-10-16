import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);
  const [upIndex, updateIndex] = useState(null);
  const [upInput, updateInput] = useState(''); 

  const inputValue = (e) => {
    setInput(e.target.value);
  }

  const editInputValue = (e) => {
    updateInput(e.target.value); 
  }

  const addButton = () => {
    setItems([...items, input]);
    setInput('');
  }

  const deleteButton = (index) => {
    const newList = items.filter((item, i) => i !== index);
    setItems(newList);
  }

  const updateButton = (index) => {
    updateIndex(index);
    updateInput(items[index]);
  }

  const saveButton = (index) => {
    updateIndex(null);
    const updatedItems = [...items];
    updatedItems[index] = upInput; 
    setItems(updatedItems);
    updateInput(''); 
  }

  return (
    <>
      <div className="container">
        <h1>To Do List</h1>

        <div className="input-group mb-3">
          <input type="text" className="form-control" id="exampleFormControlInput1" value={input} onChange={inputValue}/>
          <button type="button" className="btn btn-primary" onClick={addButton}> Add </button>
        </div>
        <ul className="list-group">
          <br></br>
          <h1>List: </h1>
          {items.map((item, index) => (
            <li key={index} className="list-group-item">
              {upIndex === index ? (
                <>
                  <input type="text" className="form-control" value={upInput} onChange={editInputValue}/>
                  <button type="button" className="btn btn-success" onClick={() => saveButton(index)}> Update</button>
                </>
              ) : (
                <>
                  {item}
                  <br></br>
                  <button type="button" className="btn btn-danger" onClick={() => deleteButton(index)}> Delete </button>
                  <button type="button" className="btn btn-success" onClick={() => updateButton(index)}> Edit</button>
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
