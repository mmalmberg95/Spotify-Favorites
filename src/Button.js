import React from 'react'
import './Button.css'

export const Button = ({children, type, onClick, activeButton}) => {

    return(
        <button 
            className={`btn ${activeButton ? "active" : " "}`}
            onClick={onClick} 
            type={type}>
                {children}
        </button>
    )
}