import React from 'react';
import '../styles/Button.css'
const Button = (props) => {
    return (
            <button className={"button" && props.className} type={props.type && 'button'}>{props.name && "Button"}</button>
    );
};

export default Button;