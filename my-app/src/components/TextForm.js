import React from "react";

export default function TextForm(props) {
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myText" className="form-label">
                </label>
                <textarea
                    className="form-control"
                    id="myText"
                    rows="8"
                ></textarea>
            </div>
        </div>
    );
}
