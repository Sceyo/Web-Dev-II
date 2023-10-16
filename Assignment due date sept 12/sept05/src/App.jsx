import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [address, setAddress] = useState(" ");
  const [submittedInfo, setSubmittedInfo] = useState(" ");

  const handleButtonClick = () => {
    
    const info = `First Name: ${firstName}, Last Name: ${lastName}, Address: ${address}`;
    setSubmittedInfo(info);
  };

  return (
    <>
      
      <h1>Enter your information</h1>
      
      <div className="mb-3">
        <label for="exampleFormControlInput1" class="form-label">First Name</label>
        <input  type="text" className="form-control" id="firstName" placeholder="Max"  onChange={(e) => setFirstName(e.target.value)}/>
      </div>

      <div className="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Last Name</label>
        <input type="text" className="form-control" id="lastName" placeholder="Verstappen" onChange={(e) => setLastName(e.target.value)} />
      </div>

      <div className="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Address</label>
        <input type="text" className="form-control" id="address" placeholder="Cebu City"  onChange={(e) => setAddress(e.target.value)}/>
       </div>

      
    
        <button onClick={handleButtonClick}>Submit</button>
     
        <p>{submittedInfo}</p>
        <br></br>
        <h2>{firstName} {lastName} {address}</h2>
     
     
    </>
  )
}

export default App
