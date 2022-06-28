import React,{useState} from 'react'

export default function TextForm(props) {
const handleupcase=()=>{
  console.log("uppercase cliked"+ text);
  let newText=text.toUpperCase();
  setText(newText);
}

const handleonchange=(event)=>{
  console.log("onchange");
  setText(event.target.value);
}

  const [text, setText] = useState("Enter Text Here");
  // console.log(text)
  return (
    <div>
      <h1>{props.headding}</h1>
  <div className="mb-3">
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <textarea className="form-control" id="exampleFormControlTextarea1" value={text} rows="8" onChange={handleonchange}></textarea>
</div>
<button className="btn btn-primary" onClick={handleupcase}>convert to uppercase</button>

    </div>
  )
}
 