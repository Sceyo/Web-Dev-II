

import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';

export default function Fetch(){

    const {listId} = useParams()
    const [list,setList] = useState(null)
    
    useEffect(() => {
        const getList = async() => {
        try{
            const result = await fetch('https://jsonplaceholder.typicode.com/posts')
            const parsedJson = await result.json(result)
            setList(parsedJson)
        }catch(e){
            console.log("Error Fetching data in list Detail")
        }
        }

        getList()

    },[])

    return(
        <>
            
        </>
    )
}