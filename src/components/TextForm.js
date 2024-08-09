import { useState } from "react"
import React from 'react'



export default function TextForm(props) {


  function clipboardCopy() {
    var copyText = text;
    navigator.clipboard.writeText(copyText);
    props.showAlert("Copied to Clipboard","success");
  
  }


  const handleUpClick=() => {
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  }


  const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");

  }


  const handleClearClick=()=>{
    let newText='';
    setText(newText);
    props.showAlert("Textarea cleared","success");

  }
  

  const handleTcClick=()=>{
    let newText=text.replace(
      /\w\S*/g,
      text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    );;
    setText(newText);
    props.showAlert("Converted to TitleCase","success");

  }
  

  const handleOnChange=(event) => {
    setText(event.target.value);
  }
  

  const [text, setText] = useState('');
  
  return (
    <>
      <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#26292b':props.mode==='burg'?'#660033':'white' ,color : props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="14"></textarea>
          <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
          <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
          <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={handleTcClick}>Convert to TitleCase</button>
          <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={clipboardCopy}>Copy to Clipboard</button>
          <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={handleClearClick}>Clear Text</button>


          </div>
      </div>
      <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words,{text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes required to read the text </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
      </div>
    </>
  )
}
