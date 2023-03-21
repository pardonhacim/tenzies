import React from "react";

export default function Die(props){

    return(
        <>
        <div className="die-face" style={{backgroundColor: props.dieObj.isSelected ? "#59E391" :"white"}}>
            <h3 className="die-num">{props.dieObj.value}</h3>
            


        </div>    
        
        </>
    )
}