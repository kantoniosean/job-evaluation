import "./style.css"
import React, { useState } from 'react';
import logo from './workday-logo.png';

export default function App() {

  const [jobName, setJobName] = useState("")
  const [jobCode, setJobCode] = useState("")
  const [effectiveDate, setEffectiveDate] = useState("")
  const [totalPoints, setTotalPoints] = useState("")

  const [factorOne, setFactorOne] = useState("")
  const [factorOneWeight, setFactorOneWeight] = useState("")

  const [factorOneSub1, setFactorOneSub1] = useState("")
  const [factorOneSub1Weights, setFactorOneSub1Weights] = useState("")
  const [factorOneSub1LevelsNumber, setFactorOneSub1LevelsNumber] = useState("")
  const [factorOneSub1LevelsGrade, setFactorOneSub1LevelsGrade] = useState("")

  const [factorOneSub2, setFactorOneSub2] = useState("")
  const [factorOneSub2Weights, setFactorOneSub2Weights] = useState("")
  const [factorOneSub2LevelsNumber, setFactorOneSub2LevelsNumber] = useState("")
  const [factorOneSub2LevelsGrade, setFactorOneSub2LevelsGrade] = useState("")

  const [factorOneSub3, setFactorOneSub3] = useState("")
  const [factorOneSub3Weights, setFactorOneSub3Weights] = useState("")
  const [factorOneSub3LevelsNumber, setFactorOneSub3LevelsNumber] = useState("")
  const [factorOneSub3LevelsGrade, setFactorOneSub3LevelsGrade] = useState("")

  const [factorTwo, setFactorTwo] = useState("")
  const [factorTwoWeight, setFactorTwoWeight] = useState("")

  const [factorTwoSub1, setFactorTwoSub1] = useState("")
  const [factorTwoSub1Weights, setFactorTwoSub1Weights] = useState("")
  const [factorTwoSub1LevelsNumber, setFactorTwoSub1LevelsNumber] = useState("")
  const [factorTwoSub1LevelsGrade, setFactorTwoSub1LevelsGrade] = useState("")

  const [factorTwoSub2, setFactorTwoSub2] = useState("")
  const [factorTwoSub2Weights, setFactorTwoSub2Weights] = useState("")
  const [factorTwoSub2LevelsNumber, setFactorTwoSub2LevelsNumber] = useState("")
  const [factorTwoSub2LevelsGrade, setFactorTwoSub2LevelsGrade] = useState("")

  const [factorTwoSub3, setFactorTwoSub3] = useState("")
  const [factorTwoSub3Weights, setFactorTwoSub3Weights] = useState("")
  const [factorTwoSub3LevelsNumber, setFactorTwoSub3LevelsNumber] = useState("")
  const [factorTwoSub3LevelsGrade, setFactorTwoSub3LevelsGrade] = useState("")

  const [factorThree, setFactorThree] = useState("")
  const [factorThreeWeight, setFactorThreeWeight] = useState("")

  const [factorThreeSub1, setFactorThreeSub1] = useState("")
  const [factorThreeSub1Weights, setFactorThreeSub1Weights] = useState("")
  const [factorThreeSub1LevelsNumber, setFactorThreeSub1LevelsNumber] = useState("")
  const [factorThreeSub1LevelsGrade, setFactorThreeSub1LevelsGrade] = useState("")

  const [factorThreeSub2, setFactorThreeSub2] = useState("")
  const [factorThreeSub2Weights, setFactorThreeSub2Weights] = useState("")
  const [factorThreeSub2LevelsNumber, setFactorThreeSub2LevelsNumber] = useState("")
  const [factorThreeSub2LevelsGrade, setFactorThreeSub2LevelsGrade] = useState("")

  function jobProfileEngineer(){
    setJobName("Mechanical Engineer");
    setJobCode("Eng123");
    setEffectiveDate("");
    setTotalPoints("1000");

    setFactorOne("Skills");
    setFactorOneWeight("55");

    setFactorOneSub1("Education");
    setFactorOneSub1Weights("40");
    setFactorOneSub1LevelsNumber("3");

    document.getElementById("factorOneSub1Select").innerHTML=
      
       `<option value="0">None</option>
       <option value="1">BS</option>
        <option value="2">Masters</option>
        <option value="3">PHD</option>`
      
    setFactorOneSub2("Licensure and Certifications");
    setFactorOneSub2Weights("30");
    setFactorOneSub2LevelsNumber("2");

    document.getElementById("factorOneSub2Select").innerHTML=
      
        `<option value="0">None</option>
        <option value="1">State/Local License</option>
        <option value="2">Professional Engineer (PE)</option>`

    setFactorOneSub3("Experience");
    setFactorOneSub3Weights("30");
    setFactorOneSub3LevelsNumber("3");

    document.getElementById("factorOneSub3Select").innerHTML=
      
        `<option value="0">None</option>
        <option value="1">4 years</option>
        <option value="2">5 years</option>
        <option value="3">6 years</option>`
    
    setFactorTwo("Responsibility");
    setFactorTwoWeight("45");

    setFactorTwoSub1("Safety");
    setFactorTwoSub1Weights("40");
    setFactorTwoSub1LevelsNumber("3");

    document.getElementById("factorTwoSub1Select").innerHTML=
      
        `<option value="0">N/A</option>
        <option value="1">Do Not Bend</option>
        <option value="2">Stain-Resistant</option>
        <option value="3">Bring it on!</option>`

    setFactorTwoSub2("Degree of Independence");
    setFactorTwoSub2Weights("40");
    setFactorTwoSub2LevelsNumber("3");

    document.getElementById("factorTwoSub2Select").innerHTML=
      
        `<option value="0">N/A</option>
        <option value="1">Worker Drone</option>
        <option value="2">Autonomous Unit</option>
        <option value="3">Rogue Agent</option>`

    setFactorTwoSub3("Supervisory");
    setFactorTwoSub3Weights("20");
    setFactorTwoSub3LevelsNumber("3");

    document.getElementById("factorTwoSub3Select").innerHTML=
      
        `<option value="0">N/A</option>
        <option value="1">Lone Wolf</option>
        <option value="2">Puppet Master</option>
        <option value="3">Commander-in-Chief</option>`

    document.getElementById("third-factor").style.display = "none"

    setFactorThreeWeight("0")
    setFactorThreeSub1Weights("50");
    setFactorThreeSub1LevelsNumber("1");

    setFactorThreeSub2Weights("50");
    setFactorThreeSub2LevelsNumber("1");

  }

  function jobProfileExecutive(){
    setJobName("Executive Director");
    setJobCode("Exe123");
    setEffectiveDate("");
    setTotalPoints("1000");

    setFactorOne("Skills");
    setFactorOneWeight("30");

    setFactorOneSub1("Education");
    setFactorOneSub1Weights("30");
    setFactorOneSub1LevelsNumber("2");

    document.getElementById("factorOneSub1Select").innerHTML=
      
       `<option value="0">None</option>
       <option value="1">BS</option>
        <option value="2">Masters</option>`
      
    setFactorOneSub2("Problem Solving");
    setFactorOneSub2Weights("20");
    setFactorOneSub2LevelsNumber("2");

    document.getElementById("factorOneSub2Select").innerHTML=
      
        `<option value="0">N/A</option>
        <option value="1">Sub-Brick</option>
        <option value="2">Know-It-All</option>`

    setFactorOneSub3("Experience");
    setFactorOneSub3Weights("50");
    setFactorOneSub3LevelsNumber("3");

    document.getElementById("factorOneSub3Select").innerHTML=
      
        `<option value="0">None</option>
        <option value="1">4 years</option>
        <option value="2">5 years</option>
        <option value="3">6 years</option>`
    
    setFactorTwo("Responsibility");
    setFactorTwoWeight("40");

    setFactorTwoSub1("Impact of Job");
    setFactorTwoSub1Weights("30");
    setFactorTwoSub1LevelsNumber("3");

    document.getElementById("factorTwoSub1Select").innerHTML=
      
        `<option value="0">N/A</option>
        <option value="1">Stays at Home</option>
        <option value="2">Solves World Hunger</option>
        <option value="3">Saves the World Every Weekend</option>`

    // I assume the more fiscally responsible you are, the higher the level
    setFactorTwoSub2("Fiscal");
    setFactorTwoSub2Weights("20");
    setFactorTwoSub2LevelsNumber("2");

    document.getElementById("factorTwoSub2Select").innerHTML=
      
        `<option value="0">N/A</option>
        <option value="1">Oaf</option>
        <option value="2">Stingy</option>`

    setFactorTwoSub3("Supervisory");
    setFactorTwoSub3Weights("50");
    setFactorTwoSub3LevelsNumber("3");

    document.getElementById("factorTwoSub3Select").innerHTML=
      
        `<option value="0">N/A</option>
        <option value="1">Lone Wolf</option>
        <option value="2">Pulling the Strings</option>
        <option value="3">Puppet Master</option>`

    setFactorThree("Effort and Demand");
    setFactorThreeWeight("30");

    setFactorThreeSub1("Mental");
    setFactorThreeSub1Weights("70");
    setFactorThreeSub1LevelsNumber("3");

    document.getElementById("factorThreeSub1Select").innerHTML=
      
        `<option value="0">N/A</option>
        <option value="1">In Tune</option>
        <option value="2">Tin-foil Hat</option>
        <option value="3">Mind Palace</option>`

    setFactorThreeSub2("Hours and Shifts");
    setFactorThreeSub2Weights("30");
    setFactorThreeSub2LevelsNumber("2");

    document.getElementById("factorThreeSub2Select").innerHTML=
      
        `<option value="0">N/A</option>
        <option value="1">Volunteering at your Local Co-op</option>
        <option value="2">Joining the Army as a Recruit</option>`

    document.getElementById("third-factor").style.display = "block"

  }

  const [finalPoints, setFinalPoints] = useState("- - -")

  function evaluate(){
    if (weightCheck()){
      setFinalPoints(Math.floor(
        ((((totalPoints * (factorOneWeight * .01)) * factorOneSub1Weights * .01))/factorOneSub1LevelsNumber) * factorOneSub1LevelsGrade +
        ((((totalPoints * (factorOneWeight * .01)) * factorOneSub2Weights * .01))/factorOneSub2LevelsNumber) * factorOneSub2LevelsGrade +
        ((((totalPoints * (factorOneWeight * .01)) * factorOneSub3Weights * .01))/factorOneSub3LevelsNumber) * factorOneSub3LevelsGrade +
        
        ((((totalPoints * (factorTwoWeight * .01)) * factorTwoSub1Weights * .01))/factorTwoSub1LevelsNumber) * factorTwoSub1LevelsGrade +
        ((((totalPoints * (factorTwoWeight * .01)) * factorTwoSub2Weights * .01))/factorTwoSub2LevelsNumber) * factorTwoSub2LevelsGrade +
        ((((totalPoints * (factorTwoWeight * .01)) * factorTwoSub3Weights * .01))/factorTwoSub3LevelsNumber) * factorTwoSub3LevelsGrade +

        ((((totalPoints * (factorThreeWeight * .01)) * factorThreeSub1Weights * .01))/factorThreeSub1LevelsNumber) * factorThreeSub1LevelsGrade +
        ((((totalPoints * (factorThreeWeight * .01)) * factorThreeSub2Weights * .01))/factorThreeSub2LevelsNumber) * factorThreeSub2LevelsGrade
      ))

      document.getElementById("error-message").innerHTML=""
    }
  }

  function weightCheck(){
    if (parseInt(factorOneWeight) + parseInt(factorTwoWeight) + parseInt(factorThreeWeight) > 100){
      document.getElementById("error-message").innerHTML=
      
        `Factor Weights are too high and must be 100.`
        return false
    }

    if (parseInt(factorOneWeight) + parseInt(factorTwoWeight) + parseInt(factorThreeWeight) < 100){
      document.getElementById("error-message").innerHTML=
      
        `Factor Weights are too low and must be 100.`
        return false
    }
    if (parseInt(factorOneSub1Weights) + parseInt(factorOneSub2Weights) + parseInt(factorOneSub3Weights) > 100){
      document.getElementById("error-message").innerHTML=
          
        factorOne + ` Sub-Factor Weights are too high and must be 100.`
        return false
    }
    if (parseInt(factorOneSub1Weights) + parseInt(factorOneSub2Weights) + parseInt(factorOneSub3Weights) < 100){
      document.getElementById("error-message").innerHTML=
  
        factorOne + ` Sub-Factor Weights are too low and must be 100.`
        return false
    }
    if (parseInt(factorTwoSub1Weights) + parseInt(factorTwoSub2Weights) + parseInt(factorTwoSub3Weights) > 100){
      document.getElementById("error-message").innerHTML=

        factorTwo + ` Sub-Factor Weights are too high and must be 100.`
        return false
    }
    if (parseInt(factorTwoSub1Weights) + parseInt(factorTwoSub2Weights) + parseInt(factorTwoSub3Weights) < 100){
      document.getElementById("error-message").innerHTML=

        factorTwo + ` Sub-Factor Weights are too low and must be 100.`
        return false
    }
    if (parseInt(factorThreeSub1Weights) + parseInt(factorThreeSub2Weights) > 100){
      document.getElementById("error-message").innerHTML=

        factorThree + ` Sub-Factor Weights are too high and must be 100.`
        return false
    }
    if (parseInt(factorThreeSub1Weights) + parseInt(factorThreeSub2Weights) < 100){
      document.getElementById("error-message").innerHTML=

        factorThree + ` Sub-Factor Weights are too low and must be 100.`
        return false
    }
    return true
  }

  function resetOutput(){
    setFinalPoints("- - -")
  }

  function searchJobCode(){
    const searchBoxInput = document.getElementById("searchBox")

    if (searchBoxInput){

      if (finalPoints > 0){
        setFinalPoints("- - -")
        setFactorOneSub1LevelsGrade("0")
        setFactorOneSub2LevelsGrade("0")
        setFactorOneSub3LevelsGrade("0")

        setFactorTwoSub1LevelsGrade("0")
        setFactorTwoSub2LevelsGrade("0")
        setFactorTwoSub3LevelsGrade("0")

        setFactorThreeSub1LevelsGrade("0")
        setFactorThreeSub2LevelsGrade("0")
        document.getElementById("error-message").innerHTML=""
      }

      switch (searchBoxInput.value){
        case "Eng 123":
          
          document.getElementById("evaluation-form").style.display = "block"
          document.getElementById("error-message").innerHTML=""

          jobProfileEngineer();
          break;
        case "Exe 123":
          
          document.getElementById("evaluation-form").style.display = "block"
          document.getElementById("error-message").innerHTML=""

          jobProfileExecutive();
          break;
        default:
      }
    }
  }

  return (
    <>
      <img src={logo} className="LOGO" />
      <label className="space"></label>
          <input placeholder="Search..." className="search" />
      <div>
        <div className="header-div">
          <h1 className="page-header">     Job Evaluation Page</h1>
        </div>

        <div className="header">
        <div className="top">
        <div>
          <input className="input" id="searchBox"></input>
        </div> 
        <div>
          <button className="submit-button" onClick={searchJobCode}>
            Search Jobcode
          </button>
          </div>
        </div>
      </div>
      </div>

      <div id="evaluation-form" style={{display:"none"}}>
        {/* header inputs */}
        <div className="top-label">
        <div>
              <label>Job Name:</label>
          </div>
          <div className="jobcode">
              <label>Jobcode:</label>
          </div>
          <div className="eff">
              <label>Effective Date:</label>
          </div>
          <div className="total-poss-points">
              <label>Total Possible Points:</label>
          </div>
        </div>
        <div className="form-factor">
          <div className="test">
            <div className="header">
                <input
                id="new-factor"
                value={jobName}
                onChange={(e) => setJobName(e.target.value)}
                type="String"
                className="header-input"
                placeholder="Job Name"
                ></input>
            </div>

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
                type="String"
                className="header-input"
                placeholder="MM-DD-YYYY"
              ></input>
            </div>

            <div className="factor-weight">
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
      <div className="label">
          <div>
              <label>Factor Name:</label>
          </div>
          <div>
              <label>Factor Weight:</label>
          </div>
        </div>
      <div className="main-factor">
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
      <div className="level">
        <div>
          <label>Sub-factor Name:</label>
        </div>
        <div>
          <label>Sub-factor Weight:</label>
        </div>
        <div>
          <label>Sub-factor Level:</label>
        </div>
        <div>
            <label >Sub-factor Points:</label>
        </div>
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
                <select id="factorOneSub1Select" className="select" onChange={(e) => {resetOutput(e); setFactorOneSub1LevelsGrade(e.target.value)}}>
                </select>
              </div>
                <h2 className="answer">
                  {Math.floor(((((totalPoints * (factorOneWeight * .01)) * factorOneSub1Weights * .01))/factorOneSub1LevelsNumber) * factorOneSub1LevelsGrade)}
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
                <select id="factorOneSub2Select" className="select" onChange={(e) => {resetOutput(e);setFactorOneSub2LevelsGrade(e.target.value)}}>
                </select>
              </div>
          
              <h2 assName="answer">
                {Math.floor(((((totalPoints * (factorOneWeight * .01)) * factorOneSub2Weights * .01))/factorOneSub2LevelsNumber) * factorOneSub2LevelsGrade)}
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
                <select id="factorOneSub3Select" className="select" onChange={(e) => {resetOutput(e);setFactorOneSub3LevelsGrade(e.target.value)}}>
                </select>
              </div>
          
              <h2 className="answer">
                {Math.floor(((((totalPoints * (factorOneWeight * .01)) * factorOneSub3Weights * .01))/factorOneSub3LevelsNumber) * factorOneSub3LevelsGrade)}
              </h2>
            </div>
        </div>

        {/*form for second factor*/}
        <div className="form-factor">

          {/* Name of Factor, Weight, and Names of Levels */}
          <div className="label">
            <div>
                <label>Factor Name:</label>
            </div>
            <div>
                <label>Factor Weight:</label>
            </div>
          </div>
          <div className="main-factor">
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

        <div className="level">
          <div>
            <label>Sub-factor Name:</label>
          </div>
          <div>
            <label>Sub-factor Weight:</label>
          </div>
          <div>
            <label>Sub-factor Level:</label>
          </div>
          <div>
            <label>Sub-factor Points:</label>
          </div>
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
                <select id="factorTwoSub1Select" className="select" onChange={(e) => {resetOutput(e); setFactorTwoSub1LevelsGrade(e.target.value)}}>
                </select>
            </div>
        
            <h2 assName="answer">
              {Math.floor(((((totalPoints * (factorTwoWeight * .01)) * factorTwoSub1Weights * .01))/factorTwoSub1LevelsNumber) * factorTwoSub1LevelsGrade)}
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
                <select id="factorTwoSub2Select" className="select" onChange={(e) => {resetOutput(e); setFactorTwoSub2LevelsGrade(e.target.value)}}>
                </select>
            </div>
            <h2 >
              {Math.floor(((((totalPoints * (factorTwoWeight * .01)) * factorTwoSub2Weights * .01))/factorTwoSub2LevelsNumber) * factorTwoSub2LevelsGrade)}
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
                <select id="factorTwoSub3Select" className="select" onChange={(e) => {resetOutput(e); setFactorTwoSub3LevelsGrade(e.target.value)}}>
                </select>
            </div>
        
            <h2 assName="answer">
              {Math.floor(((((totalPoints * (factorTwoWeight * .01)) * factorTwoSub3Weights * .01))/factorTwoSub3LevelsNumber) * factorTwoSub3LevelsGrade)}
            </h2>
          </div>

        {/*form for third factor*/}
        <div className="form-factor" id="third-factor">

            {/* Name of Factor, Weight, and Names of Levels */}
        <div className="label">
          <div>
              <label>Factor Name:</label>
          </div>
          <div>
              <label>Factor Weight:</label>
          </div>
        </div>
            <div className="main-factor">
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

        <div className="level">
          <div>
            <label>Sub-factor Name:</label>
          </div>
          <div>
            <label>Sub-factor Weight:</label>
          </div>
          <div>
            <label>Sub-factor Level:</label>
          </div>
            <div>
                <label>Sub-factor Points:</label>
            </div>
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
                <select id="factorThreeSub1Select" className="select" onChange={(e) => {resetOutput(e); setFactorThreeSub1LevelsGrade(e.target.value)}}>
                </select>
              </div>
              
              <h2 className="answer">
                {Math.floor(((((totalPoints * (factorThreeWeight * .01)) * factorThreeSub1Weights * .01))/factorThreeSub1LevelsNumber) * factorThreeSub1LevelsGrade)}
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
                <select id="factorThreeSub2Select" className="select" onChange={(e) => {resetOutput(e); setFactorThreeSub2LevelsGrade(e.target.value)}}>
                </select>
              </div>
              
              <h2 className="answer">
                {Math.floor(((((totalPoints * (factorThreeWeight * .01)) * factorThreeSub2Weights * .01))/factorThreeSub2LevelsNumber) * factorThreeSub2LevelsGrade)}
              </h2>
            </div>

          </div>
        </div>

        <div className="footer error-message" id="error-message"></div>

        <div className="final">
          <div>
            <button className="button" onClick={evaluate}>Evaluate Job</button>
          </div>

          <div>
            <h2 className="footer">
              Final Points: {finalPoints}
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}