

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Delete({items,setItems,index}) {

    const deleteButton = (index) => {
        const newList = items.filter((item, i) => i !== index);
        setItems(newList);
      }

    return (
        <>
        
          <button type="button" className="btn btn-danger" onClick={() => deleteButton(index)}> Delete </button>

        </>
    );
}

