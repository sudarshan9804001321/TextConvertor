import React, { useState } from "react";

const TextForm = (props) => {
    const handleUpbutton = () => {
        // console.log("UPPERCASE WAS CLICKED")
      setText(text.toUpperCase())
      props.showAlert("converted to uppercase","success")
    }
    const handleLobutton = () => {
        // console.log("UPPERCASE WAS CLICKED")
      setText(text.toLowerCase())
      props.showAlert("converted to lowercase","success")
    }
    const handleClbutton = () => {
        // console.log("UPPERCASE WAS CLICKED")
        let newText = '';
      setText(newText);
       props.showAlert("text has been cleared","success")
    }
    // handling the event and it is necessary to listent to event
    const handleOnChange = (event) => {
        // console.log("ONCHANGE WAS CLICKED") 
        setText(event.target.value)
    }
    const handleCopbutton = () => {
      var copytext = document.getElementById("myBox")
      copytext.select()
      navigator.clipboard.writeText(copytext.value)
      props.showAlert("copied to clipboard","success")
    }
    const handleExtbutton = () => {
      let newText = text.split(/[  ]+/)
      setText(newText.join(" "))
      props.showAlert("extra spaces removed","success")
    }
    const [text, setText] = useState("");
  return (
    <>
      <div className="container my-3">
              <div className={`mb-3 text-${props.mode==='light'?'dark':'light'}` }>
                  <h2>{props.heading}</h2>
        
          <textarea
            className={`form-control text-${props.mode==='light'?'dark':'light'}` } value={text} onChange={handleOnChange} style={{height:'30vh',backgroundColor:props.mode ==='dark'?'grey':'white'}} 
            id="myBox"
            rows="3"
          ></textarea>
              </div>
            <button  className="btn btn-primary mx-2" onClick={handleUpbutton}>Convert to Uppercase</button>
            <button  className="btn btn-primary mx-2" onClick={handleLobutton}>Convert to Lowercase</button>
            <button  className="btn btn-primary mx-2" onClick={handleClbutton}>Clear Text</button>
            <button  className="btn btn-primary mx-2" onClick={handleCopbutton}>Copy Text</button>
            <button  className="btn btn-primary mx-2" onClick={handleExtbutton}>Remove Extra Space</button>
          </div>
          <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
              <h2 >Your Text Summary</h2>
              <p >your have written {text.split(' ').length} words and {text.length} letters</p>
              <p >you need { 0.08*text.split(' ').length}minutes to read</p>
              <h3>Preview</h3>
              <p >{text.length>0?text:'Enter in textbox to preview it in here'}</p>
          </div>
    </>
  );
};

export default TextForm;
