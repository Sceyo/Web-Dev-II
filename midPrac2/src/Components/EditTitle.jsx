
import {useState} from "react"


export default function EditTitle({id,list,setList}){
    
    const [isEdit,setEdit] = useState(false)
    const [upItem,setUpItem] = useState("")

    const addNewWord = (e) =>{
        setUpItem(e.target.value)
        console.log("Testing")
    }

    const editValue = () =>{
        console.log("Changed isEdit to True")
        setEdit(true)
    }

      const changeValue = () =>{
        console.log("This is called")
        // const updateList = list.map((item, index) => {
        //     if (index === id) {
        //       return { ...item, title: newWord };
        //     }
        //     return item;
        //   });
        //   setList(updateList);
        //   setEdit(false);
        //   setNew("");
       
        const updateList = list.map((item, index) =>{
            if(index === id-1){
                return {...item, title: upItem}
            }
            return item
        })
        setList(updateList)
        setEdit(false)
        setUpItem("")

    }


    return(
        <>
        {isEdit ? (
            <div>
            <input type = "text" placeholder="E.G New Word" value = {upItem} onChange ={addNewWord}/>
            <button onClick = {changeValue}>Save</button>
            </div>
        ):(
          <button onClick = {editValue}>Edit Title</button>
        )}
    
        </>
    );


}