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

  const [jobCode, setJobCode] = useState("")
  const [effectiveDate, setEffectiveDate] = useState("")
  const [totalPoints, setTotalPoints] = useState("")

  const [factorOne, setFactorOne] = useState("")
  const [factorOneWeight, setFactorOneWeight] = useState("")
  const [factorOneLevels, setFactorOneLevels] = useState("")

  const [factorOneSub1, setFactorOneSub1] = useState("")
  const [factorOneSub1Weights, setFactorOneSub1Weights] = useState("")
  const [factorOneSub1Levels, setFactorOneSub1Levels] = useState("")

  const [factorOneSub2, setFactorOneSub2] = useState("")
  const [factorOneSub2Weights, setFactorOneSub2Weights] = useState("")
  const [factorOneSub2Levels, setFactorOneSub2Levels] = useState("")

  const [factorOneSub3, setFactorOneSub3] = useState("")
  const [factorOneSub3Weights, setFactorOneSub3Weights] = useState("")
  const [factorOneSub3Levels, setFactorOneSub3Levels] = useState("")

  const [factorTwo, setFactorTwo] = useState("")
  const [factorTwoWeight, setFactorTwoWeight] = useState("")
  const [factorTwoLevels, setFactorTwoLevels] = useState("")

  const [factorTwoSub1, setFactorTwoSub1] = useState("")
  const [factorTwoSub1Weights, setFactorTwoSub1Weights] = useState("")
  const [factorTwoSub1Levels, setFactorTwoSub1Levels] = useState("")

  const [factorTwoSub2, setFactorTwoSub2] = useState("")
  const [factorTwoSub2Weights, setFactorTwoSub2Weights] = useState("")
  const [factorTwoSub2Levels, setFactorTwoSub2Levels] = useState("")

  const [factorTwoSub3, setFactorTwoSub3] = useState("")
  const [factorTwoSub3Weights, setFactorTwoSub3Weights] = useState("")
  const [factorTwoSub3Levels, setFactorTwoSub3Levels] = useState("")

  const [factorTwoSub4, setFactorTwoSub4] = useState("")
  const [factorTwoSub4Weights, setFactorTwoSub4Weights] = useState("")
  const [factorTwoSub4Levels, setFactorTwoSub4Levels] = useState("")

  const [factorTwoSub5, setFactorTwoSub5] = useState("")
  const [factorTwoSub5Weights, setFactorTwoSub5Weights] = useState("")
  const [factorTwoSub5Levels, setFactorTwoSub5Levels] = useState("")

  const [factorTwoSub6, setFactorTwoSub6] = useState("")
  const [factorTwoSub6Weights, setFactorTwoSub6Weights] = useState("")
  const [factorTwoSub6Levels, setFactorTwoSub6Levels] = useState("")

  const [factorThree, setFactorThree] = useState("")
  const [factorThreeWeight, setFactorThreeWeight] = useState("")
  const [factorThreeLevels, setFactorThreeLevels] = useState("")

  const [factorThreeSub1, setFactorThreeSub1] = useState("")
  const [factorThreeSub1Weights, setFactorThreeSub1Weights] = useState("")
  const [factorThreeSub1Levels, setFactorThreeSub1Levels] = useState("")

  const [factorThreeSub2, setFactorThreeSub2] = useState("")
  const [factorThreeSub2Weights, setFactorThreeSub2Weights] = useState("")
  const [factorThreeSub2Levels, setFactorThreeSub2Levels] = useState("")

  const [factorThreeSub3, setFactorThreeSub3] = useState("")
  const [factorThreeSub3Weights, setFactorThreeSub3Weights] = useState("")
  const [factorThreeSub3Levels, setFactorThreeSub3Levels] = useState("")

  const [factorFour, setFactorFour] = useState("")
  const [factorFourWeight, setFactorFourWeight] = useState("")
  const [factorFourLevels, setFactorFourLevels] = useState("")

  const [factorFourSub1, setFactorFourSub1] = useState("")
  const [factorFourSub1Weights, setFactorFourSub1Weights] = useState("")
  const [factorFourSub1Levels, setFactorFourSub1Levels] = useState("")

  const [factorFourSub2, setFactorFourSub2] = useState("")
  const [factorFourSub2Weights, setFactorFourSub2Weights] = useState("")
  const [factorFourSub2Levels, setFactorFourSub2Levels] = useState("")

  const [factorFourSub3, setFactorFourSub3] = useState("")
  const [factorFourSub3Weights, setFactorFourSub3Weights] = useState("")
  const [factorFourSub3Levels, setFactorFourSub3Levels] = useState("")

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
        <div className="header">
          <input
            id="new-factor"
            value={jobCode}
            onChange={(e) => setJobCode(e.target.value)}
            type="String"
            className="input"
            placeholder="Jobcode"
          ></input>
        </div>
        
        <div className="header">
          <input
            id="new-factor"
            value={effectiveDate}
            onChange={(e) => setEffectiveDate(e.target.value)}
            type="number"
            className="input"
            placeholder="Effective Date"
          ></input>
        </div>

        <div className="header">
          <input
            id="new-factor"
            value={totalPoints}
            onChange={(e) => setTotalPoints(e.target.value)}
            type="number"
            className="input"
            placeholder="Points"
          ></input>
        </div>

        {/* Name of First Factor, Weight, and Names of Levels */}
        <div className="first-factor">
          <input type="text"
            id="new-factor"
            className="input"
            value={factorOne}
            onChange={(e) => setFactorOne(e.target.value)} 
            placeholder="Factor"
          ></input>
          <input type="number"
            id="new-factor"
            className="input"
            value={factorOneWeight}
            onChange={(e) => setFactorOneWeight(e.target.value)} 
            placeholder="Factor Weight"
          ></input>
          <input type="number"
            id="new-factor"
            className="input"
            value={factorOneLevels}
            onChange={(e) => setFactorOneLevels(e.target.value)} 
            placeholder="Number of Levels"
          ></input>
        </div>


              <div className="sub-one">
                <div>
                  <input
                    className="sub-name"
                    value={factorOneSub1}
                    onChange={(e) => setFactorOneSub1(e.target.value)}
                    type="String"
                    placeholder="Sub-factor"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorOneSub1Weights}
                    onChange={(e) => setFactorOneSub1Weights(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Weight"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorOneSub1Levels}
                    onChange={(e) => setFactorOneSub1Levels(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Level"
                  />
                </div>
            
                <h2>
                  {((((totalPoints * (factorOneWeight * .01)) * factorOneSub1Weights * .01))/factorOneLevels) * factorOneSub1Levels}
                </h2>
              </div>


              <div className="sub-one">
                <div>
                  <input
                    className="sub-name"
                    value={factorOneSub2}
                    onChange={(e) => setFactorOneSub2(e.target.value)}
                    type="String"
                    placeholder="Sub-factor"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorOneSub2Weights}
                    onChange={(e) => setFactorOneSub2Weights(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Weight"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorOneSub2Levels}
                    onChange={(e) => setFactorOneSub2Levels(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Level"
                  />
                </div>
            
                <h2>
                  {((((totalPoints * (factorOneWeight * .01)) * factorOneSub2Weights * .01))/factorOneLevels) * factorOneSub2Levels}
                </h2>
              </div>


              <div className="sub-one">
                <div>
                  <input
                    className="sub-name"
                    value={factorOneSub3}
                    onChange={(e) => setFactorOneSub3(e.target.value)}
                    type="String"
                    placeholder="Sub-factor"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorOneSub3Weights}
                    onChange={(e) => setFactorOneSub3Weights(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Weight"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorOneSub3Levels}
                    onChange={(e) => setFactorOneSub3Levels(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Level"
                  />
                </div>
            
                <h2>
                  {((((totalPoints * (factorOneWeight * .01)) * factorOneSub3Weights * .01))/factorOneLevels) * factorOneSub3Levels}
                </h2>
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

        {/* Name of Factor, Weight, and Names of Levels */}
        <div className="first-factor">
          <input type="text"
            id="new-factor"
            className="input"
            value={factorTwo}
            onChange={(e) => setFactorTwo(e.target.value)} 
            placeholder="Factor"
          ></input>
          <input type="number"
            id="new-factor"
            className="input"
            value={factorTwoWeight}
            onChange={(e) => setFactorTwoWeight(e.target.value)} 
            placeholder="Factor Weight"
          ></input>
          <input type="number"
            id="new-factor"
            className="input"
            value={factorTwoLevels}
            onChange={(e) => setFactorTwoLevels(e.target.value)} 
            placeholder="Number of Levels"
          ></input>
        </div>


              <div className="sub-one">
                <div>
                  <input
                    className="sub-name"
                    value={factorTwoSub1}
                    onChange={(e) => setFactorTwoSub1(e.target.value)}
                    type="String"
                    placeholder="Sub-factor"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorTwoSub1Weights}
                    onChange={(e) => setFactorTwoSub1Weights(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Weight"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorTwoSub1Levels}
                    onChange={(e) => setFactorTwoSub1Levels(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Level"
                  />
                </div>
            
                <h2>
                  {((((totalPoints * (factorTwoWeight * .01)) * factorTwoSub1Weights * .01))/factorTwoLevels) * factorTwoSub1Levels}
                </h2>
              </div>


              <div className="sub-one">
                <div>
                  <input
                    className="sub-name"
                    value={factorTwoSub2}
                    onChange={(e) => setFactorTwoSub2(e.target.value)}
                    type="String"
                    placeholder="Sub-factor"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorTwoSub2Weights}
                    onChange={(e) => setFactorTwoSub2Weights(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Weight"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorTwoSub2Levels}
                    onChange={(e) => setFactorTwoSub2Levels(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Level"
                  />
                </div>
            
                <h2>
                  {((((totalPoints * (factorTwoWeight * .01)) * factorTwoSub2Weights * .01))/factorTwoLevels) * factorTwoSub2Levels}
                </h2>
              </div>


              <div className="sub-one">
                <div>
                  <input
                    className="sub-name"
                    value={factorTwoSub3}
                    onChange={(e) => setFactorTwoSub3(e.target.value)}
                    type="String"
                    placeholder="Sub-factor"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorTwoSub3Weights}
                    onChange={(e) => setFactorTwoSub3Weights(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Weight"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorTwoSub3Levels}
                    onChange={(e) => setFactorTwoSub3Levels(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Level"
                  />
                </div>
            
                <h2>
                  {((((totalPoints * (factorTwoWeight * .01)) * factorTwoSub3Weights * .01))/factorTwoLevels) * factorTwoSub3Levels}
                </h2>
              </div>


              <div className="sub-one">
                <div>
                  <input
                    className="sub-name"
                    value={factorTwoSub4}
                    onChange={(e) => setFactorTwoSub4(e.target.value)}
                    type="String"
                    placeholder="Sub-factor"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorTwoSub4Weights}
                    onChange={(e) => setFactorTwoSub4Weights(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Weight"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorTwoSub4Levels}
                    onChange={(e) => setFactorTwoSub4Levels(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Level"
                  />
                </div>
            
                <h2>
                  {((((totalPoints * (factorTwoWeight * .01)) * factorTwoSub4Weights * .01))/factorTwoLevels) * factorTwoSub4Levels}
                </h2>
              </div>


              <div className="sub-one">
                <div>
                  <input
                    className="sub-name"
                    value={factorTwoSub5}
                    onChange={(e) => setFactorTwoSub5(e.target.value)}
                    type="String"
                    placeholder="Sub-factor"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorTwoSub5Weights}
                    onChange={(e) => setFactorTwoSub5Weights(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Weight"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorTwoSub5Levels}
                    onChange={(e) => setFactorTwoSub5Levels(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Level"
                  />
                </div>
            
                <h2>
                  {((((totalPoints * (factorTwoWeight * .01)) * factorTwoSub5Weights * .01))/factorTwoLevels) * factorTwoSub5Levels}
                </h2>
              </div>


              <div className="sub-one">
                <div>
                  <input
                    className="sub-name"
                    value={factorTwoSub6}
                    onChange={(e) => setFactorTwoSub6(e.target.value)}
                    type="String"
                    placeholder="Sub-factor"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorTwoSub6Weights}
                    onChange={(e) => setFactorTwoSub6Weights(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Weight"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorTwoSub6Levels}
                    onChange={(e) => setFactorTwoSub6Levels(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Level"
                  />
                </div>
            
                <h2>
                  {((((totalPoints * (factorTwoWeight * .01)) * factorTwoSub6Weights * .01))/factorTwoLevels) * factorTwoSub6Levels}
                </h2>
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
      
      {/*form for third factor*/}
      <div className="form-factor">

          {/* Name of Factor, Weight, and Names of Levels */}
          <div className="first-factor">
            <input type="text"
              id="new-factor"
              className="input"
              value={factorThree}
              onChange={(e) => setFactorThree(e.target.value)} 
              placeholder="Factor"
            ></input>

            <input type="number"
              id="new-factor"
              className="input"
              value={factorThreeWeight}
              onChange={(e) => setFactorThreeWeight(e.target.value)} 
              placeholder="Factor Weight"
            ></input>

            <input type="number"
              id="new-factor"
              className="input"
              value={factorThreeLevels}
              onChange={(e) => setFactorThreeLevels(e.target.value)} 
              placeholder="Number of Levels"
            ></input>
          </div>

          <div className="sub-one">

            <div>
              <input
                className="sub-name"
                value={factorThreeSub1}
                onChange={(e) => setFactorThreeSub1(e.target.value)}
                type="String"
                placeholder="Sub-factor"
              />
            </div>

            <div>
              <input
                className="sub-name"
                value={factorThreeSub1Weights}
                onChange={(e) => setFactorThreeSub1Weights(e.target.value)}
                type="number"
                placeholder="Sub-factor Weight"
              />
            </div>

            <div>
              <input
                className="sub-name"
                value={factorThreeSub1Levels}
                onChange={(e) => setFactorThreeSub1Levels(e.target.value)}
                type="number"
                placeholder="Sub-factor Level"
              />
            </div>
            
            <h2>
              {((((totalPoints * (factorThreeWeight * .01)) * factorThreeSub1Weights * .01))/factorThreeLevels) * factorThreeSub1Levels}
            </h2>
          </div>


          <div className="sub-one">
            <div>
              <input
                className="sub-name"
                value={factorThreeSub2}
                onChange={(e) => setFactorThreeSub2(e.target.value)}
                type="String"
                placeholder="Sub-factor"
              />
            </div>

            <div>
              <input
                className="sub-name"
                value={factorThreeSub2Weights}
                onChange={(e) => setFactorThreeSub2Weights(e.target.value)}
                type="number"
                placeholder="Sub-factor Weight"
              />
            </div>

            <div>
              <input
                className="sub-name"
                value={factorThreeSub2Levels}
                onChange={(e) => setFactorThreeSub2Levels(e.target.value)}
                type="number"
                placeholder="Sub-factor Level"
              />
            </div>
            
            <h2>
              {((((totalPoints * (factorThreeWeight * .01)) * factorThreeSub2Weights * .01))/factorThreeLevels) * factorThreeSub2Levels}
            </h2>
          </div>


              <div className="sub-one">
                <div>
                  <input
                    className="sub-name"
                    value={factorThreeSub3}
                    onChange={(e) => setFactorThreeSub3(e.target.value)}
                    type="String"
                    placeholder="Sub-factor"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorThreeSub3Weights}
                    onChange={(e) => setFactorThreeSub3Weights(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Weight"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorThreeSub3Levels}
                    onChange={(e) => setFactorThreeSub3Levels(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Level"
                  />
                </div>
            
                <h2>
                  {((((totalPoints * (factorThreeWeight * .01)) * factorThreeSub3Weights * .01))/factorThreeLevels) * factorThreeSub3Levels}
                </h2>
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
      
      {/*form for fourth factor*/}
      <div className="form-factor">

          {/* Name of Factor, Weight, and Names of Levels */}
          <div className="first-factor">
            <input type="text"
              id="new-factor"
              className="input"
              value={factorFour}
              onChange={(e) => setFactorFour(e.target.value)} 
              placeholder="Factor"
            ></input>
            
            <input type="number"
              id="new-factor"
              className="input"
              value={factorFourWeight}
              onChange={(e) => setFactorFourWeight(e.target.value)} 
              placeholder="Factor Weight"
            ></input>

            <input type="number"
              id="new-factor"
              className="input"
              value={factorFourLevels}
              onChange={(e) => setFactorFourLevels(e.target.value)} 
              placeholder="Number of Levels"
            ></input>
          </div>

          <div className="sub-one">

            <div>
              <input
                className="sub-name"
                value={factorFourSub1}
                onChange={(e) => setFactorFourSub1(e.target.value)}
                type="String"
                placeholder="Sub-factor"
              />
            </div>

            <div>
              <input
                className="sub-name"
                value={factorFourSub1Weights}
                onChange={(e) => setFactorFourSub1Weights(e.target.value)}
                type="number"
                placeholder="Sub-factor Weight"
              />
            </div>

            <div>
              <input
                className="sub-name"
                value={factorFourSub1Levels}
                onChange={(e) => setFactorFourSub1Levels(e.target.value)}
                type="number"
                placeholder="Sub-factor Level"
              />
            </div>
            
            <h2>
              {((((totalPoints * (factorFourWeight * .01)) * factorFourSub1Weights * .01))/factorFourLevels) * factorFourSub1Levels}
            </h2>
          </div>


          <div className="sub-one">
            <div>
              <input
                className="sub-name"
                value={factorFourSub2}
                onChange={(e) => setFactorFourSub2(e.target.value)}
                type="String"
                placeholder="Sub-factor"
              />
            </div>

            <div>
              <input
                className="sub-name"
                value={factorFourSub2Weights}
                onChange={(e) => setFactorFourSub2Weights(e.target.value)}
                type="number"
                placeholder="Sub-factor Weight"
              />
            </div>

            <div>
              <input
                className="sub-name"
                value={factorFourSub2Levels}
                onChange={(e) => setFactorFourSub2Levels(e.target.value)}
                type="number"
                placeholder="Sub-factor Level"
              />
            </div>
            
            <h2>
              {((((totalPoints * (factorFourWeight * .01)) * factorFourSub2Weights * .01))/factorFourLevels) * factorFourSub2Levels}
            </h2>
          </div>


          <div className="sub-one">
            <div>
              <input
                className="sub-name"
                value={factorFourSub3}
                onChange={(e) => setFactorFourSub3(e.target.value)}
                type="String"
                placeholder="Sub-factor"
              />
            </div>
                
            <div>
              <input
                className="sub-name"
                value={factorFourSub3Weights}
                onChange={(e) => setFactorFourSub3Weights(e.target.value)}
                type="number"
                placeholder="Sub-factor Weight"
              />
            </div>
                
            <div>
              <input
                className="sub-name"
                value={factorFourSub3Levels}
                onChange={(e) => setFactorFourSub3Levels(e.target.value)}
                type="number"
                placeholder="Sub-factor Level"
              />
            </div>
            
              <h2>
                {((((totalPoints * (factorFourWeight * .01)) * factorFourSub3Weights * .01))/factorFourLevels) * factorFourSub3Levels}
              </h2>
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

      <h1 className="footer">
            { 
              (((((totalPoints * (factorOneWeight * .01)) * factorOneSub1Weights * .01))/factorOneLevels) * factorOneSub1Levels) +
              (((((totalPoints * (factorOneWeight * .01)) * factorOneSub2Weights * .01))/factorOneLevels) * factorOneSub2Levels) +
              (((((totalPoints * (factorOneWeight * .01)) * factorOneSub3Weights * .01))/factorOneLevels) * factorOneSub3Levels) +

              (((((totalPoints * (factorTwoWeight * .01)) * factorTwoSub1Weights * .01))/factorTwoLevels) * factorTwoSub1Levels) + 
              (((((totalPoints * (factorTwoWeight * .01)) * factorTwoSub2Weights * .01))/factorTwoLevels) * factorTwoSub2Levels) +
              (((((totalPoints * (factorTwoWeight * .01)) * factorTwoSub3Weights * .01))/factorTwoLevels) * factorTwoSub3Levels) +
              (((((totalPoints * (factorTwoWeight * .01)) * factorTwoSub4Weights * .01))/factorTwoLevels) * factorTwoSub4Levels) +
              (((((totalPoints * (factorTwoWeight * .01)) * factorTwoSub5Weights * .01))/factorTwoLevels) * factorTwoSub5Levels) +
              (((((totalPoints * (factorTwoWeight * .01)) * factorTwoSub6Weights * .01))/factorTwoLevels) * factorTwoSub6Levels) +

              (((((totalPoints * (factorThreeWeight * .01)) * factorThreeSub1Weights * .01))/factorThreeLevels) * factorThreeSub1Levels) +
              (((((totalPoints * (factorThreeWeight * .01)) * factorThreeSub2Weights * .01))/factorThreeLevels) * factorThreeSub2Levels) +
              (((((totalPoints * (factorThreeWeight * .01)) * factorThreeSub3Weights * .01))/factorThreeLevels) * factorThreeSub3Levels) +

              (((((totalPoints * (factorFourWeight * .01)) * factorFourSub1Weights * .01))/factorFourLevels) * factorFourSub1Levels) +
              (((((totalPoints * (factorFourWeight * .01)) * factorFourSub2Weights * .01))/factorFourLevels) * factorFourSub2Levels) +
              (((((totalPoints * (factorFourWeight * .01)) * factorFourSub3Weights * .01))/factorFourLevels) * factorFourSub3Levels)
            }
      </h1>
    </>
  )
}
