

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Update({items,index,updateInput,setItems,updateIndex,upInput}) {

    
    const editInputValue = (e) => {
        updateInput(e.target.value); 
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
        
        <input type="text" className="form-control" value={upInput} onChange={editInputValue}/>
        <button type="button" className="btn btn-success" onClick={() => saveButton(index)}> Update</button>

        </>
    );
}
