

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Edit({items,index,updateIndex,updateInput}) {

    
    const updateButton = (index) => {
        console.log("Kani gi update amigo", index);
        updateIndex(index);
        updateInput(items[index].item); 
      }

    return (
        <>
        
        <button type="button" className="btn btn-success" onClick={() => updateButton(index)}> Edit</button>

        </>
    );
}