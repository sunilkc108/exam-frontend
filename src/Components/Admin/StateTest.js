import { useState } from "react";

export const StateTest = (props) => {
  const [text, setText] = useState("Enter text to analyze..");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleOnClick = (e) => {
    let newText = text;
    setText(newText.toUpperCase());
  };

  return (
    <div className="container">
      <h1> {props.heading}</h1>
      <div className="mb-3">
        <textarea
          onChange={handleChange}
          value={text}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        <button className="btn btn-primary" onClick={handleOnClick}>
          Convert to UpperCase
        </button>
      </div>
    </div>
  );
};
