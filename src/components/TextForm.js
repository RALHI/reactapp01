import React, { useState } from 'react'

export default function TextForm (props){

    const [text , setText] = useState();

    const ChangeHandler = (event) => {
        setText(event.target.value);
    }

    let newText = text;

    const ClickUppercaseHandler = () => {
        setText(newText.toUpperCase());
        props.showalert("Sentence converted to uppercase" , "success")
    }

    const ClickLowercaseHandler = () => {
        setText(newText.toLowerCase());
        props.showalert("Sentence converted to lowercase" , "success")
    }

    const Clear = () => {
        setText("");
        props.showalert("TextArea Cleared" , "success")
    }

    const modecolor = props.mode;

    return(
        <>
                <div className={`text-${modecolor === "light" ? "dark" : "light"}`}>
                    <div className="mb-3">
                            <h2><label htmlFor="exampleFormControlTextarea1" className="form-label my-2">{props.feedback}</label></h2>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={ChangeHandler}>{text}</textarea>
                        </div>
                        <button className="btn btn-primary mx-1" onClick={ClickUppercaseHandler}>Convert to UpperCase</button>
                        <button className="btn btn-primary mx-1" onClick={ClickLowercaseHandler}>Convert to LowerCase</button>
                        <button className="btn btn-primary mx-1" onClick={Clear}>Clear</button>
               </div>
               
               <div className={`container my-3 text-${props.mode === "light" ? "dark" : "light"}`}>
                    <h3>Txt Summary</h3>
                    {/* <p>{text.split(" ").length} words and {text.length} total characters</p> */}
               </div>  
        </>
    );
}