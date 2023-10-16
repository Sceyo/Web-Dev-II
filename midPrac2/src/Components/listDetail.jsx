
import {useState,useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
import EditBody from './EditBody'

export default function listDetail(){

    const {listId} = useParams()
    const [list,setList] = useState(null)
    
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


    return(
        <>  
           
            <div>
                {list !== null ? (<div>
                    <h2>{list[listId].title}</h2>
                    <h3>{list[listId].body}</h3>
                </div>) : (<div><h1>.... Loading</h1></div>)
                  
            
            
                }
                <Link to = '/add'>
                    <button>Back</button>          
                </Link>
                

            </div>
        
        
        
        
        
        </>
    )
}