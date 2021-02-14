import React from 'react'
import "./customButton.style.scss"

function CustomButton({children,bgColor,color,onClick, type}){

    const style={
        "background":bgColor,
        "color":color
    }

    return (
        <button onClick={onClick} className="customButton" type={type} style={style}>
            {children}
        </button>
    )
}

export default CustomButton