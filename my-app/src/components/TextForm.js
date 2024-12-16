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
        <div>
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
                <h2>Your next summary</h2>
                {/* <p> {text.split(" ").length} and {text.length}</p> */}
                <p> {text.split(" ").filter(word => word !== "").length} and {text.length}</p> {/* Filter out empty strings*/}
                <p> {0.008 * text.split(" ").length} minutes to read</p> {/* Filter out empty strings*/}
                <h3>Preview</h3>
                <p> {text}</p> {/* Filter out empty strings*/}
            </div>
        </div>
    );
}
