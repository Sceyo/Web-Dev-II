

export default function Delete({id,list,setList}){

    const delVal = () =>{
        console.log("Delete")
        const newList = list.filter((item) => item.id !== id)
        setList(newList)
    }

    return(
        <>
         <button onClick = {delVal}>Remove</button>  
        
        </>
    );
}