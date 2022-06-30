import React,{useState} from 'react'

export default function TextForm(props) {

const handleupcase=()=>{
  console.log("uppercase cliked"+ text);
  let newText=text.toUpperCase();
  setText(newText);
}

const handlelowercase=()=>{
  console.log("uppercase cliked"+ text);
  let newText=text.toLowerCase();
  setText(newText);
}

const clearText=()=>{
  setText("");
}

const handleonchange=(event)=>{
  console.log("onchange");
  setText(event.target.value);
}

  const [text, setText] = useState("");
  // console.log(text)
  return (
    <>
    <div className='container'>
      <h1>{props.headding}</h1>
  <div className="mb-3">
  {/* <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/> */}
</div>
<div className="mb-3">
  <textarea className="form-control" id="exampleFormControlTextarea1" value={text} rows="8" onChange={handleonchange}></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleupcase}>convert to uppercase</button>
<button className="btn btn-primary mx-2" onClick={handlelowercase}>convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={clearText}>clearText</button>

    </div>

    <div className="container my-3" >
      <h1>Your Text Summury</h1>
      <p>{text.split(" ").length} words,{text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    
    </div>
    </>
  )
}
 