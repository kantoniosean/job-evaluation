import "./style.css"
import React, { useState } from 'react';
import logo from './workday-logo.png';

export default function App() {

  const [val1, setVal1] = useState([]);

  const [val2, setVal2] = useState([]);

  const [val3, setVal3] = useState([]);

  const [val4, setVal4] = useState([]);

  const [jobCode, setJobCode] = useState("")
  const [effectiveDate, setEffectiveDate] = useState("")
  const [totalPoints, setTotalPoints] = useState("")

  const [factorOne, setFactorOne] = useState("")
  const [factorOneWeight, setFactorOneWeight] = useState("")

  const [factorOneSub1, setFactorOneSub1] = useState("")
  const [factorOneSub1Weights, setFactorOneSub1Weights] = useState("")
  const [factorOneSub1LevelsName, setFactorOneSub1LevelsName] = useState("")
  const [factorOneSub1LevelsNumber, setFactorOneSub1LevelsNumber] = useState("")
  const [factorOneSub1LevelsGrade, setFactorOneSub1LevelsGrade] = useState("")

  const [factorOneSub2, setFactorOneSub2] = useState("")
  const [factorOneSub2Weights, setFactorOneSub2Weights] = useState("")
  const [factorOneSub2LevelsName, setFactorOneSub2LevelsName] = useState("")
  const [factorOneSub2LevelsNumber, setFactorOneSub2LevelsNumber] = useState("")
  const [factorOneSub2LevelsGrade, setFactorOneSub2LevelsGrade] = useState("")

  const [factorOneSub3, setFactorOneSub3] = useState("")
  const [factorOneSub3Weights, setFactorOneSub3Weights] = useState("")
  const [factorOneSub3LevelsName, setFactorOneSub3LevelsName] = useState("")
  const [factorOneSub3LevelsNumber, setFactorOneSub3LevelsNumber] = useState("")
  const [factorOneSub3LevelsGrade, setFactorOneSub3LevelsGrade] = useState("")

  const [factorTwo, setFactorTwo] = useState("")
  const [factorTwoWeight, setFactorTwoWeight] = useState("")

  const [factorTwoSub1, setFactorTwoSub1] = useState("")
  const [factorTwoSub1Weights, setFactorTwoSub1Weights] = useState("")
  const [factorTwoSub1LevelsName, setFactorTwoSub1LevelsName] = useState("")
  const [factorTwoSub1LevelsNumber, setFactorTwoSub1LevelsNumber] = useState("")
  const [factorTwoSub1LevelsGrade, setFactorTwoSub1LevelsGrade] = useState("")

  const [factorTwoSub2, setFactorTwoSub2] = useState("")
  const [factorTwoSub2Weights, setFactorTwoSub2Weights] = useState("")
  const [factorTwoSub2LevelsName, setFactorTwoSub2LevelsName] = useState("")
  const [factorTwoSub2LevelsNumber, setFactorTwoSub2LevelsNumber] = useState("")
  const [factorTwoSub2LevelsGrade, setFactorTwoSub2LevelsGrade] = useState("")

  const [factorTwoSub3, setFactorTwoSub3] = useState("")
  const [factorTwoSub3Weights, setFactorTwoSub3Weights] = useState("")
  const [factorTwoSub3LevelsName, setFactorTwoSub3LevelsName] = useState("")
  const [factorTwoSub3LevelsNumber, setFactorTwoSub3LevelsNumber] = useState("")
  const [factorTwoSub3LevelsGrade, setFactorTwoSub3LevelsGrade] = useState("")

  const [factorTwoSub4, setFactorTwoSub4] = useState("")
  const [factorTwoSub4Weights, setFactorTwoSub4Weights] = useState("")
  const [factorTwoSub4LevelsName, setFactorTwoSub4LevelsName] = useState("")
  const [factorTwoSub4LevelsNumber, setFactorTwoSub4LevelsNumber] = useState("")
  const [factorTwoSub4LevelsGrade, setFactorTwoSub4LevelsGrade] = useState("")

  const [factorTwoSub5, setFactorTwoSub5] = useState("")
  const [factorTwoSub5Weights, setFactorTwoSub5Weights] = useState("")
  const [factorTwoSub5LevelsName, setFactorTwoSub5LevelsName] = useState("")
  const [factorTwoSub5LevelsNumber, setFactorTwoSub5LevelsNumber] = useState("")
  const [factorTwoSub5LevelsGrade, setFactorTwoSub5LevelsGrade] = useState("")

  const [factorTwoSub6, setFactorTwoSub6] = useState("")
  const [factorTwoSub6Weights, setFactorTwoSub6Weights] = useState("")
  const [factorTwoSub6LevelsName, setFactorTwoSub6LevelsName] = useState("")
  const [factorTwoSub6LevelsNumber, setFactorTwoSub6LevelsNumber] = useState("")
  const [factorTwoSub6LevelsGrade, setFactorTwoSub6LevelsGrade] = useState("")

  const [factorThree, setFactorThree] = useState("")
  const [factorThreeWeight, setFactorThreeWeight] = useState("")

  const [factorThreeSub1, setFactorThreeSub1] = useState("")
  const [factorThreeSub1Weights, setFactorThreeSub1Weights] = useState("")
  const [factorThreeSub1LevelsName, setFactorThreeSub1LevelsName] = useState("")
  const [factorThreeSub1LevelsNumber, setFactorThreeSub1LevelsNumber] = useState("")
  const [factorThreeSub1LevelsGrade, setFactorThreeSub1LevelsGrade] = useState("")

  const [factorThreeSub2, setFactorThreeSub2] = useState("")
  const [factorThreeSub2Weights, setFactorThreeSub2Weights] = useState("")
  const [factorThreeSub2LevelsName, setFactorThreeSub2LevelsName] = useState("")
  const [factorThreeSub2LevelsNumber, setFactorThreeSub2LevelsNumber] = useState("")
  const [factorThreeSub2LevelsGrade, setFactorThreeSub2LevelsGrade] = useState("")

  const [factorThreeSub3, setFactorThreeSub3] = useState("")
  const [factorThreeSub3Weights, setFactorThreeSub3Weights] = useState("")
  const [factorThreeSub3LevelsName, setFactorThreeSub3LevelsName] = useState("")
  const [factorThreeSub3LevelsNumber, setFactorThreeSub3LevelsNumber] = useState("")
  const [factorThreeSub3LevelsGrade, setFactorThreeSub3LevelsGrade] = useState("")

  const [factorFour, setFactorFour] = useState("")
  const [factorFourWeight, setFactorFourWeight] = useState("")

  const [factorFourSub1, setFactorFourSub1] = useState("")
  const [factorFourSub1Weights, setFactorFourSub1Weights] = useState("")
  const [factorFourSub1LevelsName, setFactorFourSub1LevelsName] = useState("")
  const [factorFourSub1LevelsNumber, setFactorFourSub1LevelsNumber] = useState("")
  const [factorFourSub1LevelsGrade, setFactorFourSub1LevelsGrade] = useState("")

  const [factorFourSub2, setFactorFourSub2] = useState("")
  const [factorFourSub2Weights, setFactorFourSub2Weights] = useState("")
  const [factorFourSub2LevelsName, setFactorFourSub2LevelsName] = useState("")
  const [factorFourSub2LevelsNumber, setFactorFourSub2LevelsNumber] = useState("")
  const [factorFourSub2LevelsGrade, setFactorFourSub2LevelsGrade] = useState("")

  const [factorFourSub3, setFactorFourSub3] = useState("")
  const [factorFourSub3Weights, setFactorFourSub3Weights] = useState("")
  const [factorFourSub3LevelsName, setFactorFourSub3LevelsName] = useState("")
  const [factorFourSub3LevelsNumber, setFactorFourSub3LevelsNumber] = useState("")
  const [factorFourSub3LevelsGrade, setFactorFourSub3LevelsGrade] = useState("")

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

  const handleChange = (e) => {
    setData({ ...numbers, [e.target.value]: e.target.value });
  };

  return (
    <>
    <div className="design">
        <img src={logo} className="LOGO" />
      <div>
        <input placeholder="Search..." className="search" />
      </div>
    </div>
    <div>
    <div className="header-div">
      <h1 className="page-header">     Job Evaluation Page</h1>
    </div>
    </div>
      {/*form for first factor*/}
      <div className="form-factor">
        <div className="test">
        <div className="header">
          <input
            id="new-factor"
            value={jobCode}
            onChange={(e) => setJobCode(e.target.value)}
            type="String"
            className="header-input"
            placeholder="Jobcode"
          ></input>
        </div>
        
        <div className="header">
          <input
            id="new-factor"
            value={effectiveDate}
            onChange={(e) => setEffectiveDate(e.target.value)}
            type="number"
            className="header-input"
            placeholder="Effective Date"
          ></input>
        </div>

        <div className="header">
          <input
            id="new-factor"
            value={totalPoints}
            onChange={(e) => setTotalPoints(e.target.value)}
            type="number"
            className="header-input"
            placeholder="Points"
          ></input>
        </div>
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
                    value={factorOneSub1LevelsName}
                    onChange={(e) => setFactorOneSub1LevelsName(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Level Name"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorOneSub1LevelsNumber}
                    onChange={(e) => setFactorOneSub1LevelsNumber(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Max Level"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorOneSub1LevelsGrade}
                    onChange={(e) => setFactorOneSub1LevelsGrade(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Level Grade"
                  />
                </div>
            
                <h2>
                  {((((totalPoints * (factorOneWeight * .01)) * factorOneSub1Weights * .01))/factorOneSub1LevelsNumber) * factorOneSub1LevelsGrade}
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
                    value={factorOneSub2LevelsName}
                    onChange={(e) => setFactorOneSub2LevelsName(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Level Name"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorOneSub2LevelsNumber}
                    onChange={(e) => setFactorOneSub2LevelsNumber(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Max Level"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorOneSub2LevelsGrade}
                    onChange={(e) => setFactorOneSub2LevelsGrade(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Level Grade"
                  />
                </div>
            
                <h2>
                  {((((totalPoints * (factorOneWeight * .01)) * factorOneSub2Weights * .01))/factorOneSub2LevelsNumber) * factorOneSub2LevelsGrade}
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
                    value={factorOneSub3LevelsName}
                    onChange={(e) => setFactorOneSub3LevelsName(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Level Name"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorOneSub3LevelsNumber}
                    onChange={(e) => setFactorOneSub3LevelsNumber(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Max Level"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorOneSub3LevelsGrade}
                    onChange={(e) => setFactorOneSub3LevelsGrade(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Level Grade"
                  />
                </div>
            
                <h2>
                  {((((totalPoints * (factorOneWeight * .01)) * factorOneSub3Weights * .01))/factorOneSub3LevelsNumber) * factorOneSub3LevelsGrade}
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
          <button className="button" onClick={()=>handleAddOne()}>Add</button>
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
                    value={factorTwoSub1LevelsName}
                    onChange={(e) => setFactorTwoSub1LevelsName(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Level Name"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorTwoSub1LevelsNumber}
                    onChange={(e) => setFactorTwoSub1LevelsNumber(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Max Level"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorTwoSub1LevelsGrade}
                    onChange={(e) => setFactorTwoSub1LevelsGrade(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Level Grade"
                  />
                </div>
            
                <h2>
                  {((((totalPoints * (factorTwoWeight * .01)) * factorTwoSub1Weights * .01))/factorTwoSub1LevelsNumber) * factorTwoSub1LevelsGrade}
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
                    value={factorTwoSub2LevelsName}
                    onChange={(e) => setFactorTwoSub2LevelsName(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Level Name"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorTwoSub2LevelsNumber}
                    onChange={(e) => setFactorTwoSub2LevelsNumber(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Max Level"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorTwoSub2LevelsGrade}
                    onChange={(e) => setFactorTwoSub2LevelsGrade(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Level Grade"
                  />
                </div>
            
                <h2>
                  {((((totalPoints * (factorTwoWeight * .01)) * factorTwoSub2Weights * .01))/factorTwoSub2LevelsNumber) * factorTwoSub2LevelsGrade}
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
                    value={factorTwoSub3LevelsName}
                    onChange={(e) => setFactorTwoSub3LevelsName(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Level Name"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorTwoSub3LevelsNumber}
                    onChange={(e) => setFactorTwoSub3LevelsNumber(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Max Level"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorTwoSub3LevelsGrade}
                    onChange={(e) => setFactorTwoSub3LevelsGrade(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Level Grade"
                  />
                </div>
            
                <h2>
                  {((((totalPoints * (factorTwoWeight * .01)) * factorTwoSub3Weights * .01))/factorTwoSub3LevelsNumber) * factorTwoSub3LevelsGrade}
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
                    value={factorTwoSub4LevelsName}
                    onChange={(e) => setFactorTwoSub4LevelsName(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Level Name"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorTwoSub4LevelsNumber}
                    onChange={(e) => setFactorTwoSub4LevelsNumber(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Max Level"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorTwoSub4LevelsGrade}
                    onChange={(e) => setFactorTwoSub4LevelsGrade(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Level Grade"
                  />
                </div>
            
                <h2>
                  {((((totalPoints * (factorTwoWeight * .01)) * factorTwoSub4Weights * .01))/factorTwoSub4LevelsNumber) * factorTwoSub4LevelsGrade}
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
                    value={factorTwoSub5LevelsName}
                    onChange={(e) => setFactorTwoSub5LevelsName(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Level Name"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorTwoSub5LevelsNumber}
                    onChange={(e) => setFactorTwoSub5LevelsNumber(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Max Level"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorTwoSub5LevelsGrade}
                    onChange={(e) => setFactorTwoSub5LevelsGrade(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Level Grade"
                  />
                </div>
            
                <h2>
                  {((((totalPoints * (factorTwoWeight * .01)) * factorTwoSub5Weights * .01))/factorTwoSub5LevelsNumber) * factorTwoSub5LevelsGrade}
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
                    value={factorTwoSub6LevelsName}
                    onChange={(e) => setFactorTwoSub6LevelsName(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Level Name"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorTwoSub6LevelsNumber}
                    onChange={(e) => setFactorTwoSub6LevelsNumber(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Max Level"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorTwoSub6LevelsGrade}
                    onChange={(e) => setFactorTwoSub6LevelsGrade(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Level Grade"
                  />
                </div>
            
                <h2>
                  {((((totalPoints * (factorTwoWeight * .01)) * factorTwoSub6Weights * .01))/factorTwoSub6LevelsNumber) * factorTwoSub6LevelsGrade}
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
          <button className="button" onClick={()=>handleAddOne()}>Add</button>
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
                value={factorThreeSub1LevelsName}
                onChange={(e) => setFactorThreeSub1LevelsName(e.target.value)}
                type="String"
                placeholder="Sub-factor Level Name"
              />
            </div>

            <div>
              <input
                className="sub-name"
                value={factorThreeSub1LevelsNumber}
                onChange={(e) => setFactorThreeSub1LevelsNumber(e.target.value)}
                type="number"
                placeholder="Sub-factor Max Level"
              />
            </div>

            <div>
              <input
                className="sub-name"
                value={factorThreeSub1LevelsGrade}
                onChange={(e) => setFactorThreeSub1LevelsGrade(e.target.value)}
                type="number"
                placeholder="Sub-factor Level Grade"
              />
            </div>
            
            <h2>
              {((((totalPoints * (factorThreeWeight * .01)) * factorThreeSub1Weights * .01))/factorThreeSub1LevelsNumber) * factorThreeSub1LevelsGrade}
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
                value={factorThreeSub2LevelsName}
                onChange={(e) => setFactorThreeSub2LevelsName(e.target.value)}
                type="String"
                placeholder="Sub-factor Level Name"
              />
            </div>

            <div>
              <input
                className="sub-name"
                value={factorThreeSub2LevelsNumber}
                onChange={(e) => setFactorThreeSub2LevelsNumber(e.target.value)}
                type="number"
                placeholder="Sub-factor Max Level"
              />
            </div>

            <div>
              <input
                className="sub-name"
                value={factorThreeSub2LevelsGrade}
                onChange={(e) => setFactorThreeSub2LevelsGrade(e.target.value)}
                type="number"
                placeholder="Sub-factor Level Grade"
              />
            </div>
            
            <h2>
              {((((totalPoints * (factorThreeWeight * .01)) * factorThreeSub2Weights * .01))/factorThreeSub2LevelsNumber) * factorThreeSub2LevelsGrade}
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
                    value={factorThreeSub3LevelsName}
                    onChange={(e) => setFactorThreeSub3LevelsName(e.target.value)}
                    type="String"
                    placeholder="Sub-factor Level Name"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorThreeSub3LevelsNumber}
                    onChange={(e) => setFactorThreeSub3LevelsNumber(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Max Level"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorThreeSub3LevelsGrade}
                    onChange={(e) => setFactorThreeSub3LevelsGrade(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Level Grade"
                  />
                </div>
            
                <h2>
                  {((((totalPoints * (factorThreeWeight * .01)) * factorThreeSub3Weights * .01))/factorThreeSub3LevelsNumber) * factorThreeSub3LevelsGrade}
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
            <button className="button" onClick={()=>handleAddOne()}>Add</button>
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
                    value={factorFourSub1LevelsName}
                    onChange={(e) => setFactorFourSub1LevelsName(e.target.value)}
                    type="String"
                    placeholder="Sub-factor Level Name"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorFourSub1LevelsNumber}
                    onChange={(e) => setFactorFourSub1LevelsNumber(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Max Level"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorFourSub1LevelsGrade}
                    onChange={(e) => setFactorFourSub1LevelsGrade(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Level Grade"
                  />
                </div>
            
                <h2>
                  {((((totalPoints * (factorFourWeight * .01)) * factorFourSub1Weights * .01))/factorFourSub1LevelsNumber) * factorFourSub1LevelsGrade}
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
                    value={factorFourSub2LevelsName}
                    onChange={(e) => setFactorFourSub2LevelsName(e.target.value)}
                    type="String"
                    placeholder="Sub-factor Level Name"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorFourSub2LevelsNumber}
                    onChange={(e) => setFactorFourSub2LevelsNumber(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Max Level"
                  />
                </div>
                <div>
                  <input
                    className="sub-name"
                    value={factorFourSub2LevelsGrade}
                    onChange={(e) => setFactorFourSub2LevelsGrade(e.target.value)}
                    type="number"
                    placeholder="Sub-factor Level Grade"
                  />
                </div>
            
                <h2>
                  {((((totalPoints * (factorFourWeight * .01)) * factorFourSub2Weights * .01))/factorFourSub2LevelsNumber) * factorFourSub2LevelsGrade}
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
                value={factorFourSub3LevelsName}
                onChange={(e) => setFactorFourSub3LevelsName(e.target.value)}
                type="String"
                placeholder="Sub-factor Level Name"
              />
            </div>

            <div>
              <input
                className="sub-name"
                value={factorFourSub3LevelsNumber}
                onChange={(e) => setFactorFourSub3LevelsNumber(e.target.value)}
                type="number"
                placeholder="Sub-factor Max Level"
                />
            </div>
                
            <div>
              <input
                className="sub-name"
                value={factorFourSub3LevelsGrade}
                onChange={(e) => setFactorFourSub3LevelsGrade(e.target.value)}
                type="number"
                placeholder="Sub-factor Level Grade"
                />
            </div>
            
            <h2>
              {((((totalPoints * (factorFourWeight * .01)) * factorFourSub3Weights * .01))/factorFourSub3LevelsNumber) * factorFourSub3LevelsGrade}
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
            <button className="button" onClick={()=>handleAddOne()}>Add</button>
          </div>
      </div>

      <h1 className="footer">
            { 
              (((((totalPoints * (factorOneWeight * .01)) * factorOneSub1Weights * .01))/factorOneSub1LevelsNumber) * factorOneSub1LevelsGrade) +
              (((((totalPoints * (factorOneWeight * .01)) * factorOneSub2Weights * .01))/factorOneSub2LevelsNumber) * factorOneSub2LevelsGrade) +
              (((((totalPoints * (factorOneWeight * .01)) * factorOneSub3Weights * .01))/factorOneSub3LevelsNumber) * factorOneSub3LevelsGrade) +

              (((((totalPoints * (factorTwoWeight * .01)) * factorTwoSub1Weights * .01))/factorTwoSub1LevelsNumber) * factorTwoSub1LevelsGrade) + 
              (((((totalPoints * (factorTwoWeight * .01)) * factorTwoSub2Weights * .01))/factorTwoSub2LevelsNumber) * factorTwoSub2LevelsGrade) +
              (((((totalPoints * (factorTwoWeight * .01)) * factorTwoSub3Weights * .01))/factorTwoSub3LevelsNumber) * factorTwoSub3LevelsGrade) +
              (((((totalPoints * (factorTwoWeight * .01)) * factorTwoSub4Weights * .01))/factorTwoSub4LevelsNumber) * factorTwoSub4LevelsGrade) +
              (((((totalPoints * (factorTwoWeight * .01)) * factorTwoSub5Weights * .01))/factorTwoSub5LevelsNumber) * factorTwoSub5LevelsGrade) +
              (((((totalPoints * (factorTwoWeight * .01)) * factorTwoSub6Weights * .01))/factorTwoSub6LevelsNumber) * factorTwoSub6LevelsGrade) +

              (((((totalPoints * (factorThreeWeight * .01)) * factorThreeSub1Weights * .01))/factorThreeSub1LevelsNumber) * factorThreeSub1LevelsGrade) +
              (((((totalPoints * (factorThreeWeight * .01)) * factorThreeSub2Weights * .01))/factorThreeSub2LevelsNumber) * factorThreeSub2LevelsGrade) +
              (((((totalPoints * (factorThreeWeight * .01)) * factorThreeSub3Weights * .01))/factorThreeSub3LevelsNumber) * factorThreeSub3LevelsGrade) +

              (((((totalPoints * (factorFourWeight * .01)) * factorFourSub1Weights * .01))/factorFourSub1LevelsNumber) * factorFourSub1LevelsGrade) +
              (((((totalPoints * (factorFourWeight * .01)) * factorFourSub2Weights * .01))/factorFourSub2LevelsNumber) * factorFourSub2LevelsGrade) +
              (((((totalPoints * (factorFourWeight * .01)) * factorFourSub3Weights * .01))/factorFourSub3LevelsNumber) * factorFourSub3LevelsGrade)
            }
      </h1>
    </>
  )
}
