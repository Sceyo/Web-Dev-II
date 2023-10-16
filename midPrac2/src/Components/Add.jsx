
import Navbar from "./Navbar.jsx"
import {useState,useEffect} from 'react'
import Card from './Card.jsx'
import Remove from './Remove'
import EditTitle from './EditTitle.jsx'
import EditBody from './EditBody.jsx'

export default function Add(){

    const [list,setList] = useState(null)
    const [value,setValue] = useState(null)

    useEffect(() =>{
        
            const getList = async () =>{
                try{
                    const result = await fetch('https://jsonplaceholder.typicode.com/posts')
                    const parsedJson = await result.json()
                    setList(parsedJson)
                }catch(e){
                    console.log("Error in fetching data")
                }
    
            }
        
        if(!list ){
            getList()
        }
    },[])

    

    const getVal = (e) =>{
        setValue(e.target.value)
        console.log("Succesfullt inserted")
    }

    const insertList = () =>{
        if(value.trim() !== ''){
            setList([...list,{id: list.length + 1, title: value}])
            setValue('')
        }
    }

    return(
        <>
        <Navbar/>

        {console.log(list)}

        <input type = "text" placeholder = "E.G Word" style = {{marginTop: '90px', width: '500px'}} value = {value} onChange = {getVal}/>
        <button style ={{border: '1px solid black',backgroundColor: 'green'}} onClick = {insertList}>Insert</button>
        <h1 style = {{marginTop: '40px'}}>Lists:</h1>
        {list === null ? (
            <h2>....Loading</h2>
        ):(
            <ul>
                {list.map((item) => (
                    <div key = {item.id} style={{border: 'solid', borderWidth: 1, margin: 20, padding: 20}}>
                        <Card id = {item.id} item ={item}/>
                        <Remove id = {item.id} list = {list} setList = {setList} />
                        <EditTitle id = {item.id} list = {list} setList = {setList}/>
                        <EditBody id = {item.id} list = {list} setList = {setList}/>
                    </div>
                    
                )
                )}
            </ul>
        )}
        

        </>
    )
}