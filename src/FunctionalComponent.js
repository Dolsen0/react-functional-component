import React, {useState} from "react"


function FunctionalComponents({count}){
    const[newCount, setNewCount] = useState(1);
    const plusClick = () => setNewCount(newCount + 1)
    const minusClick = () => setNewCount(newCount - 1)
    
    
    
    
    return(
        <>
        Im functional!!
        {newCount}
        <button onClick={plusClick}>Add one</button>
        <button onClick={minusClick}>Minus one</button>
        
        </>
    )
}


export default FunctionalComponents