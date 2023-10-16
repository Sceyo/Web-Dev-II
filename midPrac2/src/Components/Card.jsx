import React from 'react'
import {Link} from 'react-router-dom'


export default function Card({item}){

    return(
      
            <Link to={`/list/${item.id}`}>
                <div >
                    {console.log(item)}
                    { console.log(item.id)}
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                    
                </div>
            </Link>
       
    )
}