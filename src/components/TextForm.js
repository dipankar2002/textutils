import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  // const [previewText, setPreviewText] = useState("Preview text area");
  const handleOnClickU = () => {
    setText(text.toUpperCase())
  }
  const handleOnClickL = () => {
    setText(text.toLowerCase())
  }
  const clearTextBTN = () => {
    const newText = "";
    setText(newText);
  }
  const copyTextBTN = () => {
    navigator.clipboard.writeText(text);
  }

  const handleOnChange = (event) => {
     setText(event.target.value)
  }
  // const handleOnChangePT = (event) => {
  //   setPreviewText(event.target.value)
  // }
  function textLength(text) {
    const totalLength = text.length;
    let count = 0;
    for(let i = 0; i < text.length; i++) {
      if(text[i] === ' ') {
        count++;
      }
    }
    return totalLength - count;
  }
  function textWord(text) {
    // let count = 0;
    // for(let i = 0; i < text.length; i++) {
    //   if(text[i] == ' ') {
    //     count++;
    //   }
    // }
    // console.log(count);
    if(text[text.length-1] === ' ') {
      return text.split(" ").length-1;
    } else if(text[text.length-1] !== ' ') {
      return text.split(" ").length;
    }
    // return text.split(" ").length;
  }
  const clearSpaceBTN = () => {
    let currentText = text.replace(/\s+/g, ' ').trim();
    setText(currentText);
    // console.log(currentText);
  }
  const capitalBTN = () => {
    let currentTextArr = text.split(/\s+/g);
    console.log(currentTextArr.length);
    for(let i = 0; i < currentTextArr.length; i++) {
      let str = currentTextArr[i];
      console.log(str);
      // str[0] = str[0].toUpperCase();
      // currentTextArr[i] = str;
    }
    const newText = currentTextArr.toString();
    console.log(currentTextArr);
    console.log(newText);
    // setText(currentTextArr);
  }
  let myStyle = {
    color: 'white',
    backgroundColor: 'black'
  }
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="my-3">
        <textarea style={myStyle} className="form-control fs-4 text-secondary" value={text} onChange={handleOnChange} id="myBox" rows=""></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleOnClickU}>Convert to Upper Case</button>
      <button className="btn btn-primary mx-2" onClick={handleOnClickL}>Convert to Lower Case</button>
      <button className="btn btn-primary mx-2" onClick={clearTextBTN}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={copyTextBTN}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={clearSpaceBTN}>Clear Space</button>
      <button className="btn btn-primary mx-2" onClick={capitalBTN}>capital</button>
    </div>
    <div className="container">
      <h1>Summary</h1>
      <p>{textWord(text)} words and {textLength(text)} charecters</p>
      <h3>Preview</h3>
      <p>{text.toLowerCase()}</p>
      {/* <div className="my-3">
        <textarea className="form-control fs-4 text-secondary" value={previewText} onChange={handleOnChangePT} id="myBox" rows="1"></textarea>
      </div> */}
    </div>
    </>
  )
}
  

