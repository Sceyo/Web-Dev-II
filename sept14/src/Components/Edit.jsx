

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Edit({items,index,updateIndex,updateInput}) {

    
const updateButton = (index) => {
    updateIndex(index);
    updateInput(items[index]);
  }

    return (
        <>
        
        <button type="button" className="btn btn-success" onClick={() => updateButton(index)}> Edit</button>

        </>
    );
}