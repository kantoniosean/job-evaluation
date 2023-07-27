import "./style.css"
import React, { useState } from 'react';

export default function App() {

  const data = {
    number1: 0,
    number2: 0,
    result: 0
  }
  const [numbers, setData] = useState(data)

  const [val1, setVal1] = useState([]);

  const [val2, setVal2] = useState([]);

  const [val3, setVal3] = useState([]);

  const [val4, setVal4] = useState([]);

  const handleAddOne=()=>{
    const newIn=[...val1, []]
    setVal1(newIn)
  }

  const handleAddTwo=()=>{
    const newIn=[...val2, []]
    setVal2(newIn)
  }

  const handleAddThree=()=>{
    const newIn=[...val3, []]
    setVal3(newIn)
  }

  const handleAddFour=()=>{
    const newIn=[...val4, []]
    setVal4(newIn)
  }

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
      {/*form for first factor*/}
      <div className="form-factor">
        <div className="first-factor">
          <input type="text" id="new-factor" className="input" onChange={handleChange}></input>
        </div>
        <div className="sub-one">
            <div>
              <input className="sub-name" onChange={(e=>handleChange(e,i))}/>
            </div>
            <div>
              <input className="sub-weight" onChange={(e=>handleChange(e,i))}/>
            </div>
            <div>
              <input className="sub-point" onChange={(e=>handleChange(e,i))}/>
            </div>
            <div>
              <input className="sub-des" onChange={(e=>handleChange(e,i))}/>
            </div>
          </div>
          <div className="sub-one">
            <div>
              <input className="sub-name" onChange={(e=>handleChange(e,i))}/>
            </div>
            <div>
              <input className="sub-weight" onChange={(e=>handleChange(e,i))}/>
            </div>
            <div>
              <input className="sub-point" onChange={(e=>handleChange(e,i))}/>
            </div>
            <div>
              <input className="sub-des" onChange={(e=>handleChange(e,i))}/>
            </div>
          </div>
          {val1.map((data,i)=>{
            return(
              <div className="sub-one">
                <div>
                  <input className="sub-name" onChange={(e=>handleChange(e,i))}/>
                </div>
                <div>
                  <input className="sub-weight" onChange={(e=>handleChange(e,i))}/>
                </div>
                <div>
                  <input className="sub-point" onChange={(e=>handleChange(e,i))}/>
                </div>
                <div>
                  <input className="sub-des" onChange={(e=>handleChange(e,i))}/>
                </div>
              </div>
            )
          })}
        <div className="new-button">
          <button onClick={()=>handleAddOne()}>Add</button>
        </div>
      </div>

      {/*form for second factor*/}
      <div className="form-factor">
        <div className="first-factor">
          <input type="text" id="new-factor" className="input" onChange={handleChange}></input>
        </div>
        <div className="sub-one">
            <div>
              <input className="sub-name" onChange={(e=>handleChange(e,i))}/>
            </div>
            <div>
              <input className="sub-weight" onChange={(e=>handleChange(e,i))}/>
            </div>
            <div>
              <input className="sub-point" onChange={(e=>handleChange(e,i))}/>
            </div>
            <div>
              <input className="sub-des" onChange={(e=>handleChange(e,i))}/>
            </div>
          </div>
          <div className="sub-one">
            <div>
              <input className="sub-name" onChange={(e=>handleChange(e,i))}/>
            </div>
            <div>
              <input className="sub-weight" onChange={(e=>handleChange(e,i))}/>
            </div>
            <div>
              <input className="sub-point" onChange={(e=>handleChange(e,i))}/>
            </div>
            <div>
              <input className="sub-des" onChange={(e=>handleChange(e,i))}/>
            </div>
          </div>
          {val2.map((data,i)=>{
            return(
              <div className="sub-one">
                <div>
                  <input className="sub-name" onChange={(e=>handleChange(e,i))}/>
                </div>
                <div>
                  <input className="sub-weight" onChange={(e=>handleChange(e,i))}/>
                </div>
                <div>
                  <input className="sub-point" onChange={(e=>handleChange(e,i))}/>
                </div>
                <div>
                  <input className="sub-des" onChange={(e=>handleChange(e,i))}/>
                </div>
              </div>
            )
          })}
        <div className="new-button">
          <button onClick={()=>handleAddTwo()}>Add</button>
        </div>
      </div>
      
      {/*form for third factor*/}
      <div className="form-factor">
        <div className="first-factor">
          <input type="text" id="new-factor" className="input" onChange={handleChange}></input>
        </div>
        <div className="sub-one">
            <div>
              <input className="sub-name" onChange={(e=>handleChange(e,i))}/>
            </div>
            <div>
              <input className="sub-weight" onChange={(e=>handleChange(e,i))}/>
            </div>
            <div>
              <input className="sub-point" onChange={(e=>handleChange(e,i))}/>
            </div>
            <div>
              <input className="sub-des" onChange={(e=>handleChange(e,i))}/>
            </div>
          </div>
          <div className="sub-one">
            <div>
              <input className="sub-name" onChange={(e=>handleChange(e,i))}/>
            </div>
            <div>
              <input className="sub-weight" onChange={(e=>handleChange(e,i))}/>
            </div>
            <div>
              <input className="sub-point" onChange={(e=>handleChange(e,i))}/>
            </div>
            <div>
              <input className="sub-des" onChange={(e=>handleChange(e,i))}/>
            </div>
          </div>
          {val3.map((data,i)=>{
            return(
              <div className="sub-one">
                <div>
                  <input className="sub-name" onChange={(e=>handleChange(e,i))}/>
                </div>
                <div>
                  <input className="sub-weight" onChange={(e=>handleChange(e,i))}/>
                </div>
                <div>
                  <input className="sub-point" onChange={(e=>handleChange(e,i))}/>
                </div>
                <div>
                  <input className="sub-des" onChange={(e=>handleChange(e,i))}/>
                </div>
              </div>
            )
          })}
        <div className="new-button">
          <button onClick={()=>handleAddThree()}>Add</button>
        </div>
      </div>
      
      {/*form for fourth factor*/}
      <div className="form-factor">
        <div className="first-factor">
          <input type="text" id="new-factor" className="input" onChange={handleChange}></input>
        </div>
        <div className="sub-one">
            <div>
              <input className="sub-name" onChange={(e=>handleChange(e,i))}/>
            </div>
            <div>
              <input className="sub-weight" onChange={(e=>handleChange(e,i))}/>
            </div>
            <div>
              <input className="sub-point" onChange={(e=>handleChange(e,i))}/>
            </div>
            <div>
              <input className="sub-des" onChange={(e=>handleChange(e,i))}/>
            </div>
          </div>
          <div className="sub-one">
            <div>
              <input className="sub-name" onChange={(e=>handleChange(e,i))}/>
            </div>
            <div>
              <input className="sub-weight" onChange={(e=>handleChange(e,i))}/>
            </div>
            <div>
              <input className="sub-point" onChange={(e=>handleChange(e,i))}/>
            </div>
            <div>
              <input className="sub-des" onChange={(e=>handleChange(e,i))}/>
            </div>
          </div>
          {val4.map((data,i)=>{
            return(
              <div className="sub-one">
                <div>
                  <input className="sub-name" onChange={(e=>handleChange(e,i))}/>
                </div>
                <div>
                  <input className="sub-weight" onChange={(e=>handleChange(e,i))}/>
                </div>
                <div>
                  <input className="sub-point" onChange={(e=>handleChange(e,i))}/>
                </div>
                <div>
                  <input className="sub-des" onChange={(e=>handleChange(e,i))}/>
                </div>
              </div>
            )
          })}
        <div className="new-button">
          <button onClick={()=>handleAddFour()}>Add</button>
        </div>
      </div>

    <h2>{numbers.number1}</h2>
    </>
  )
}
