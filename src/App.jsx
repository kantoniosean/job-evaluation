import "./style.css"
import React, { useState } from 'react';

export default function App() {

  const data = {
    number1: 0,
    number2: 0,
    result: 0
  }
  const [numbers, setData] = useState(data)

  var result;

  function add() {
    numbers.result = parseInt(numbers.number1) + parseInt(numbers.number2);
    console.log(numbers.result);
  }

  const handleChange = (e) => {
    setData({ ...numbers, [e.target.value]: e.target.value });
  };

  const display = () => console.log(numbers);

  return (
    <>
    <form className="new-form">
        <div className="form-factor">
          <input type="number" id="new-factor" className="input" onChange={handleChange}></input>
          <input type="number" onChange={handleChange}></input>
          <button onClick={display} className="mew-button">Add</button>
        </div>
    </form>
    <h2>{numbers.number1}</h2>
    </>
  )
}
