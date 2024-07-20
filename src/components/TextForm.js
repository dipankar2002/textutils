import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  // const [previewText, setPreviewText] = useState("Preview text area");
  const handleOnClickU = () => {
    setText(text.toUpperCase());
    // props.showAlert("Uppercase done","primary");
  }
  const handleOnClickL = () => {
    setText(text.toLowerCase())
    // props.showAlert("Lowercase done","primary");
  }
  const clearTextBTN = () => {
    const newText = "";
    setText(newText);
    // props.showAlert("Clear Text done","primary");
  }
  const copyTextBTN = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copy done","primary");
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
    // props.showAlert("Space Clear done","primary");
  }
  const capitalBTN = () => {
    let currentTextArr = text.split(/\s+/g);
    console.log(currentTextArr.length);
    let arr = [];
    for(let i = 0; i < currentTextArr.length; i++) {
      let str = currentTextArr[i];
      let strN = str[0];
      let strNn = strN.toUpperCase();
      console.log(`${str} ${typeof(str)}`);
      // console.log(str[0].toUpperCase());
      console.log(strNn);
      let nStr;
      // if(str !== (/[ ]+/)) {
        if(str.length === 1) {
          nStr = strNn;
        } else {
          nStr = strNn + str.slice(1,str.length);
        }
      // }
      
      console.log(`${nStr} 2nd`);
      arr.push(nStr);
      currentTextArr[i] = nStr;
    }
    const newText = arr.join(" ");
    console.log(currentTextArr);
    console.log(arr);
    console.log(newText);
    setText(newText);
    // props.showAlert("First Char Capital done","primary");
  }
  const myStyle = {
    backgroundColor: props.mode === 'light' ? 'white' : 'black',
    color: props.mode === 'light' ? 'black' : 'white'
  }
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="my-3">
        <textarea className="form-control fs-4 text-secondary" style={myStyle}  value={text} onChange={handleOnChange} id="myBox" rows=""></textarea>
      </div>
      <button className={`btn btn-${props.themeColor} mx-2`} onClick={handleOnClickU}>Convert to Upper Case</button>
      <button className={`btn btn-${props.themeColor} mx-2`} onClick={handleOnClickL}>Convert to Lower Case</button>
      <button className={`btn btn-${props.themeColor} mx-2`} onClick={clearTextBTN}>Clear Text</button>
      <button className={`btn btn-${props.themeColor} mx-2`} onClick={copyTextBTN}>Copy Text</button>
      <button className={`btn btn-${props.themeColor} mx-2`} onClick={clearSpaceBTN}>Clear Space</button>
      <button className={`btn btn-${props.themeColor} mx-2`} onClick={capitalBTN}>capital</button>
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
  
