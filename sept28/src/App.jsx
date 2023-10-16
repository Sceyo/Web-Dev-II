import { useEffect, useState } from 'react'
import AddItem from './components/AddItem'
import 'bootstrap/dist/css/bootstrap.min.css';
import Delete from './components/Delete';
import Update from './components/Update';
import Edit from './components/Edit';
import './App.css'

//IMPORT NPM INSTALL BOOTSTRAP


function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('')
  const [showError, setShowError] = useState(false)
  const [localStorageData, setLocalStorageData] = useState([]);
  const [upIndex, updateIndex] = useState(null)
  const [upInput, updateInput] = useState('');

  useEffect(() => {

    const localStorageData = localStorage.getItem('YLSKey'); //YourLocalStorageKey Acronym Meaning
    // network call using promises
    if(!localStorageData){
      fetch("https://jsonplaceholder.typicode.com/albums")
      .then(response => response.json())
      .then(data => {
        setItems(data)
        setLocalStorageData(data);
      })
      .catch(error => {
        console.log("Error:", error);
      });
    }
  
    //network call using async/await
    // const networkCall = async () => {
    //   try {
    //     const result = await fetch("https://jsonplaceholder.typicode.com/albums")
    //     const parsedData = await result.json()
    //     setItems(parsedData)
    //     setLocalStorageData(parsedData);
    //   }catch(error){
    //     co.log("Error:", error);
    //     setShowError(true)
    //   }
    // }
    // networkCall()
  }, [])


  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(items));
    setLocalStorageData(items);
  }, [items])

  const addItem = (item) => {
    const userId = items.length ? items[items.length - 1].userId + 1 : 1;
    const myNewItem = { userId, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
    setLocalStorageData(listItems);
    updateIndex(null); 
    updateInput('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem); 
    setNewItem('');
    setLocalStorageData(items); 
  }
  


  return (
    <div className="App">
    {console.log(localStorageData)}
    <AddItem
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
    />
    <ul>
      {localStorageData.map((item, index) => (
        <li key={index}>
        {upIndex === index ? (
          <>
          <Update items = {items} index = {index} updateInput = {updateInput} setItems = {setItems} updateIndex={updateIndex} upInput={upInput}/>
          </>
        ) : (
          <>
            {item.item ? (
              <div>{item.item}</div>
            ) : (
              <div>{item.title}</div>
            )}
            <br></br>
            <Delete items={items} setItems={setItems} index={index} />
            <Edit items = {item} index = {index} updateIndex={updateIndex} updateInput={updateInput}></Edit>
          </>
        )}
      </li>
      ))}
    </ul>
  </div>
  );
}

export default App
