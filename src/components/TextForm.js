import { useState } from "react"
import React from 'react'


export default function TextForm(props) {

  const handleUpClick=() => {
    // console.log("Uppercase converter button was clicked");
    let newText=text.toUpperCase();
    setText(newText);
  }

  const handleOnChange=(event) => {
    // console.log("Textarea was changed");
    setText(event.target.value);
  }
  
  
  const [text, setText] = useState('Enter text here');
  
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="14"></textarea>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    </div>
  )
}
