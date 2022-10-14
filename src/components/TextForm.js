import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {


    const [text, setText] = useState('');
    // text = "any text"; We cannot assign text directly
    // setText("any text"); Correct way to set text




    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success")
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success")
    }

    const handleSentClick = () => {
        // let newText = text.lastIndexOf(".");
        // console.log(newText);
        const arr = text.split(".");
        // console.log(arr);
        // const trimmedarr = arr.map(element => {
        //     return element.trim();
        // });

        // console.log(trimmedarr);

        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
            console.log(arr[i]);
            // if (arr[i].charAt(0) === " ") {
            //     let spaceIndex = arr[i].lastIndexOf(" ");
            //     arr[i] = arr[i].charAt(spaceIndex + 1).toUpperCase() + arr[i].slice(spaceIndex + 2);
            // }
            // else {
            //     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
            // }

            // console.log(trimmedarr[i]);
        }

        // const finalStr = () => {
        //     for (let j = 0; j < arr.length; j++) {

        //         if (arr[j].charAt(0) === " ") {
        //             let chkspace = arr[j].lastIndexOf(" ");
        //             console.log(" ".repeat(chkspace + 1) + arr[j].join("."));
        //         }
        //         else {
        //             console.log(arr.join("."));
        //         }
        //     }
        // }
        // console.log(finalstr);
        const finalStr = arr.join("");
        setText(finalStr);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }


    const handleClearClick = () => {
        let newText = "";
        setText(newText);

        props.showAlert("Text Cleared", "success")

    }

    const handleCopy = () => {
        var a = document.getElementById("myBox");
        a.select();
        navigator.clipboard.writeText(a.value);

        props.showAlert("Copied to Clipboard", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed", "success")
    }

    const wordcheck = () => {
        let wordArr = text.split(/[ ]+/);
        if (wordArr[wordArr.length - 1].charAt(0) === '') {
            return (wordArr.length - 1);
        }
        else {
            return (wordArr.length);
        }

    }


    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">{props.heading}</label>

                    <textarea className="form-control" placeholder='Enter Text Here' style={{
                        backgroundColor: props.mode === 'light' ? 'white' : '#585e7e',
                        color: props.mode === 'light' ? 'black' : 'white'
                    }} value={text} /*onKeyUp={handleUpClick}*/ onChange={handleOnChange} id="myBox" rows="6"></textarea>
                </div>
                <button disabled={text.length===0}className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0}className="btn btn-primary my-2 mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length===0}className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0}className="btn btn-primary my-2 mx-2" onClick={handleSentClick}>Sentence Case</button>
                <button disabled={text.length===0}className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0}className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your Paragraph Summary</h2>
                <p>{wordcheck()} words and {text.length} characters</p>
                <p>{wordcheck() * 0.008} minutes time required to read the Paragraph.</p>
                <h3 style={{display : text.length===0?'none':''}}>Preview</h3>
                <p style={{display : text.length===0?'none':''}}>{text.length > 0 ? text : 'Nothing to preview'}</p>
            </div>
        </>
    )
}

TextForm.propsType = {
    heading: PropTypes.string.isRequired
}

