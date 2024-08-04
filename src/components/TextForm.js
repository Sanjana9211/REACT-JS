import { useState } from "react"
import React from 'react'


export default function TextForm(props) {


  function clipboardCopy() {
    // Get the text field
    var copyText = text;
    navigator.clipboard.writeText(copyText);
  
  }


  const handleUpClick=() => {
    // console.log("Uppercase converter button was clicked");
    let newText=text.toUpperCase();
    setText(newText);
  }


  const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
  }


  const handleClearClick=()=>{
    let newText='';
    setText(newText);
  }
  

  const handleTcClick=()=>{
    let newText=text.replace(
      /\w\S*/g,
      text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    );;
    setText(newText);
  }
  

  const handleOnChange=(event) => {
    // console.log("Textarea was changed");
    setText(event.target.value);
  }
  

  const [text, setText] = useState('');
  
  return (
    <>
      <div className="container">
          <h1>{props.heading}</h1>
          <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="14"></textarea>
          <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="btn btn-primary my-3 mx-1" onClick={handleTcClick}>Convert to TitleCase</button>
          <button className="btn btn-primary my-3 mx-1" onClick={clipboardCopy}>Copy to Clipboard</button>
          <button className="btn btn-primary my-3 mx-1" onClick={handleClearClick}>Clear Text</button>


          </div>
      </div>
      <div className="container">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words,{text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes required to read the text </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
