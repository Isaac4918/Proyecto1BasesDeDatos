import React from "react";
import "./Input.css";

const Input = ({attribute, handleChange, param,className}) =>{

    return(
        <div className="input-container">

            <input
             
            id={attribute.id}
            name={attribute.name}
            placeholder={attribute.placeholder} 
            type={attribute.type}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={param ? "error-format" : "default-format"}
            />

        </div>
    )

};

export default Input;