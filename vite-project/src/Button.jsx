import React from "react";

const Button = ({onClick}) => {
    return (
        <button className="Button" onClick={onClick}>
        Cambia Modalità
      </button>
    );
}


export default Button;