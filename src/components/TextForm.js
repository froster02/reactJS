import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleClrText = () => {
        setText("");
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard", "success");
    }

    const onChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState('Enter Your Text Here');

    return (
        <>
            <h1>{props.heading}</h1>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={onChange}
                        id="myText"
                        rows="8"
                        style={{
                            backgroundColor: props.mode === 'dark' ? '#333' : 'white',
                            color: props.mode === 'dark' ? 'white' : 'black'
                        }}
                    ></textarea>
                    <br />
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
                        Convert to Uppercase
                    </button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>
                        Convert to Lowercase
                    </button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClrText}>
                        Clear Text
                    </button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
                        Copy
                    </button>
                </div>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>
                    {text.split(/\s/).filter(word => word !== "").length} words and {text.length} characters
                </p>
                <p>
                    {0.008 * text.split(" ").filter(word => word !== "").length} minutes to read
                </p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    );
}
