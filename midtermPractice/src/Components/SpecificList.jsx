
import Navbar from './Navbar.jsx'
import {useState,useEffect} from "react"

export default function SpecificList(){

    const [value,setValue] = useState('')
    const [list,setList] = useState(null)
    const [val,setVal] = useState(null)

    useEffect(() => {
        const getList = async () =>{
            try{
                const result = await fetch('https://jsonplaceholder.typicode.com/posts')
                const parsedJson = await result.json()

                setList(parsedJson)

            }catch(e){
                console.log("Error in fetching the data");
            }
        }
        getList()
    },[])





    const getValue = (e) =>{
        setValue(e.target.value)
        console.log("This is clicked")
    }



    const dispValue = () =>{
       if(list){
            const toFind = parseInt(value)

            for(let i = 0; i < list.length; i++){
                if(list[i].id === toFind){
                    setVal(list[i].title)
                }

            }


       }
       
    }

    return(
        <>
        <Navbar/>
        <input type = "text" placeholder="E.G. ID number" value = {value} onChange={getValue}/>
        <button onClick={dispValue}>Find</button>
        <br/>
        {val !== null? <h1>{val}</h1>: null}
        
        </>
    );
}