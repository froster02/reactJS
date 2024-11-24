import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
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
                ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    );
}
