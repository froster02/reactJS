import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = () => {
        // console.log("uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClrText = () => {
        setText("");
    }
    const onChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
    //text = "new text" //wrong way to change the state
    //setTex("new text")
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    value={text}
                    onChange={onChange}
                    id="myText"
                    rows="8"
                ></textarea> <br></br>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClrText}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p> {text.split(" ").filter(word => word !== "").length} words and {text.length} characters</p>
                <p> {0.008 * text.split(" ").filter(word => word !== "").length} minutes to read</p>
                <h3>Preview</h3>
                <p> {text}</p>
            </div>
        </>
    );
}
