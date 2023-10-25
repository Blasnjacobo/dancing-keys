import { useEffect, useState } from 'react';
import './App.css';
import keyData from "./KeysData"
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Sequence from './components/Sequence/Sequence';
import Popup from './components/Popup/Popup';




function App() {
  
const[enabled, setenabled] = useState(false)
const[correctSequence, setCorrectSequence] = useState([])
const[userSequence, setUserSequence] = useState([])
const[buttonPressTime, setButtonPressTime] = useState(null)
const[runtime, setRuntime] = useState(0);
const[readingButton, setReadingButton] = useState(true)
const[readyButton, setReadyButton] = useState(false)
const[popup, setPopup] = useState(false)
const[round, setRound] = useState(1)
const[count, setCount] = useState(3)
const[result, setResult] = useState("")

  function handlechange (id){
    setUserSequence(oldArray => [...oldArray, id])
  }

  const handleButtonPress = () => {
    setButtonPressTime(new Date().getTime())
    setRuntime(0)
  }

  function settingPopup (){
    setPopup(true)
  }


  function setNewSequence(){
    const listOfKeys = []
    let resultRandom = [];
    for (const key in keyData) { listOfKeys.push(keyData[key].name);}
    function randomValue(){ return listOfKeys[Math.floor(Math.random() * listOfKeys.length)]}
    for(let i=0; i<count;i++){
    resultRandom.push(randomValue())}
    return resultRandom
  }

  function playAgain(){
    setenabled(false)
    setCorrectSequence([])
    setUserSequence([])
    setButtonPressTime(null)
    setRuntime(0);
    setReadingButton(true)
    setReadyButton(false)
    setPopup(false)
  }

  

useEffect(() => {
    if(result==="lose"){
      setCount(3)
      setRound(1)
    }
    let intervalId;
    if (buttonPressTime !== null) {
      setCorrectSequence (setNewSequence())
      // Update the runtime every second
      intervalId = setInterval(() => {
        setenabled(true)
        setReadingButton(false)
        const currentTime = new Date().getTime();
        const elapsedSeconds = Math.floor((currentTime - buttonPressTime) / 1000);
        setRuntime(elapsedSeconds);

        // Check if 10 seconds have passed, and clear the interval
        if (elapsedSeconds > 10) {
          clearInterval(intervalId);
          setenabled(false)
          setReadyButton(true)
        }
      }, 1000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
        setCount(count+1)
        setRound(round+1)
      }
    };
  }, [buttonPressTime]);

return(
  <>
    <div className='dancing-keys-header'>
      <Header />
    </div>
    <Hero keyData={keyData} handlechange={handlechange} userSequence={userSequence} enabled={enabled} popup={popup}/>
    <Sequence enabled={enabled} correctSequence={correctSequence}/>
    <button 
    className='readyButton'
    style={!readingButton ? {display: "none"} : {display:"grid"}}
    onClick={handleButtonPress}>Start Game</button> 
    {enabled && buttonPressTime && (<p className="displaying-time">Runtime since button press: {runtime} seconds</p>)}
    <button 
    className='readyButton'
    style={(!readyButton || popup) ? {display: "none"} : {display:"grid"}}
    onClick={settingPopup}
    >Ready</button>
    <div>
    <h1 className='round' style={(readyButton || enabled) ? {color: "transparent"} : {color:"red"}}>Round: {round}</h1>
    <p className= "executing-instructions" style={(!readyButton || popup) ? {color: "transparent"} : {color:"black"}}>Press the buttons according to the sequence seen:</p>
    <p className= "executing-instructions2" style={(!readyButton || popup) ? {color: "transparent"} : {color:"black"}}>Then press Ready button:</p>
    <Popup correctSequence={correctSequence} userSequence={userSequence} 
    popup={popup} playAgain={playAgain} setResult={setResult} round={round}/>
    </div>

  </>
)
}

export default App;
