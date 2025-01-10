import React from "react";
import Styles from "./button.module.css"

function Button({str, handleClick}){
    
    return(
        <div>
            <button className={Styles.btn} value = {str} onClick={(e)=>handleClick(e)}>{str}</button>
        </div>
    )
}

export default Button;