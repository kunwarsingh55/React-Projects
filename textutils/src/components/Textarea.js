import { useState } from "react";
import PropsType from 'prop-types';

import React from 'react'

function Textarea(props) {
    const [text, setText] = useState("Enter Text Here");
    const handleUpper = () => {
        setText(text.toUpperCase());
        props.alertFun("Converted text to Upper Case");
    }

    const handleLower =()=>{
        setText(text.toLowerCase());
        props.alertFun("Converted text to Lower Case");
    }

    const handleTextAreaChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            
            <div className="container my-3">
                <h1>{props.title}</h1>
                <div className="mb-3">
                    <textarea className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} value={text} onChange={handleTextAreaChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                    <button className="btn btn-primary m-3" onClick={handleUpper}>Make UpperCase</button>
                    <button className="btn btn-primary m-3" onClick={handleLower}>Make LowerCase</button>
                </div>
            </div>
            <div className="container">
                <h3>Text Summary</h3>
                <p>{text.split(" ").filter((ele)=>{return ele!=0}).length} Words and {text.length} Characters<br/>
                {text.split(" ").length * 0.008} Minutes Read</p>
            </div>
        </>
    );
}

Textarea.prototype = {
    title : PropsType.string
}


export default Textarea;