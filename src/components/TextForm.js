import React,{useState} from 'react'
// This is function based component

export default function TextForm(props)
 {
  //function for toUpperCase
  const handleUpClick=()=>{
     let newText=text.toUpperCase();
    setText(newText);
   }
   //function for toLowerCase
   const handleLowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
   }
   //function for Cleartext
   const handleClear=()=>{
    let newText='';
    setText(newText);
   }
    const  HandleOnChange=(event)=>{
     setText(event.target.value)
     }

  const [text,setText]=useState("");

  return (
    <>
<div className="container">
<div className="mb-3">
<h1>{props.heading}</h1>
<textarea className="form-control"value={text} onChange={HandleOnChange} id="myText" rows="3" placeholder="Enter Text Here:"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
<button type="button" class="btn btn-primary mx-1" onClick={handleClear}>ClearText</button>
</div>
<div className="container my-3">
  <h2>Your Text Summary</h2>
  <p>{text.split(" ").length} Words and {text.length} Characters</p>
  <p>{0.008 * text.split(" ").length} Minutes Read </p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
</>
  )
}
