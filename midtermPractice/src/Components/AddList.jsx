
import {useState,useEffect} from "react"
import Navbar from './Navbar.jsx'
import Delete from './Delete.jsx'
import Edit from './Edit.jsx'

export default function AddList(){

    const [list,setList] = useState(null);
    const [value,setValue] = useState(null)


    useEffect(() => {

       const getList = async () =>{
            try{
                const result = await fetch('https://jsonplaceholder.typicode.com/posts')
                const parsedJson = await result.json()

                setList(parsedJson)
            }catch(e){
                console.log('Error in getting the data')
            }
        }
        
        getList()
    },[]);

    const getValue = (e) =>{
        setValue(e.target.value)
        console.log("Success")
    }

    const addVal = () =>{
        if (value.trim() !== ''){
            setList([...list,{id: list.length + 1, title: value}])
            setValue('')
        }
    }

    return(
        <>
        <Navbar/>
        <br/>
        <br/>
        <h1>Welcome to the list of data</h1>
        <br/>
        <br/>
        <br/>
        <input type = "text" placeholder="E.G Word" value = {value} onChange = {getValue}/>
        <button onClick = {addVal}>ADD</button>

        <br/>
        <br/>
        <h2>List of data</h2>
        {console.log(list)}
        {list === null ?(
            <p>....Loading</p>
        ) : (
            <ul>
            {list.map((item) => (
                <li key ={item.id}>
                    
                    <div>
                    {item.title}
                        <Edit id ={item.id} list = {list} setList ={setList}/>
                        <Delete id = {item.id} list = {list} setList = {setList}/>
                    </div>
                </li> 
            )
            )}
        </ul>
        )}
            
       
           
        
        
        </>
    );


}

