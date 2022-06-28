import React,{useState} from 'react'

export default function TextForm(props) {
  return (
    <div>
      <h1>{props.headding}</h1>
  <div className="mb-3">
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary">convert to uppercase</button>

    </div>
  )
}
 