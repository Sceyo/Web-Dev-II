
import {useState,useEffect} from "react"
import Navbar from './Navbar.jsx'

export default function List(){

    const [list,setList] = useState(null);

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


    return(
        <>
        <Navbar/>
        <br/>
        <br/>
        <h1>List of data</h1>
        {list === null ?(
            <p>....Loading</p>
        ) : (
            <ul>
            {list.map((item) => (
                <li key ={item.id}>{item.title}</li>
            )
            )}
        </ul>
        )}
            
       
           
        
        
        </>
    );


}

