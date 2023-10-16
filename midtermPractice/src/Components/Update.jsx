


export default function Update({list,id}){

    const [upItem,setUpItem] = useState("")

    const addNewWord = (e) =>{
        setUpItem(e.target.value)
        console.log("Testing")
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
       
    }
    
    return(
        <>
        <div>
            <input type = "text" placeholder="E.G New Word" value = {upItem} onChange ={addNewWord}/>
            <button onClick = {changeValue}>Save</button>
        </div>
        </>
    )
}