

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Input({items,setItems,input,setInput}) {
    
    const inputValue = (e) => {
        setInput(e.target.value);
      };
    
    const addButton = () => {
        setItems([...items, input]);
        setInput('');
      }
    
    return (
        <>
        
        <input type="text" className="form-control" id="exampleFormControlInput1" value={input} onChange={inputValue} />   
         <button type="button" className="btn btn-primary" onClick={addButton}> Add </button>

        </>
    );
}


