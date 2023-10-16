

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Update({items,index,updateInput,setItems,updateIndex,upInput}) {

    
    const editInputValue = (e) => {
        updateInput(e.target.value); 
      }
      
      const saveButton = () => {
        updateIndex(null);
        const updatedItems = [...items]; 
        // updatedItems[index].title = upInput;
        updatedItems[index].item = upInput; 
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
