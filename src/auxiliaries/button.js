import React from 'react'
import './button.css';

function Button (props) {
    return (
        <div className="centerdiv">
            <button className="buttonstyle">{props.message}</button>
        </div>
    )  
}

export default Button;