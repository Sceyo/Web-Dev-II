
import {useState} from 'react'

export default function Remove({id,list,setList}){

    const deleteVal = () =>{
       console.log("Deleted xd")
       const newList = list.filter((item) => item.id !== id)
       setList(newList)
    }

    return(
        <>
            <button onClick = {deleteVal}>Remove</button>
        </>
    )
}