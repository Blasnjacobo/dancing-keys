import {useState} from 'react'
import "./Hero.css"
import west from "./keys/west.png"
import east from "./keys/east.png"
import north from "./keys/north.png"
import south from "./keys/south.png"
import square from "./keys/square.png"
import triangule from "./keys/triangule.png"
import circle from "./keys/circle.png"
import ex from "./keys/ex.png"


const Hero = (props) => {

  let {keyData, handlechange, userSequence, enabled, popup} = props

  keyData = Array.from(keyData)
  return (
      <div className='hero-panel' style={(!enabled && !popup) ? {display: "grid"} : {display:"none"}}>
        <img src={west} onClick={() => handlechange(keyData[3]["name"])} className='hero-img-west' alt=''></img>
        <img src={east} onClick={() => handlechange(keyData[1]["name"])} className='hero-img-east pointingImg' alt=''></img>
        <img src={north} onClick={() => handlechange(keyData[0]["name"])} className='hero-img-north pointingImg' alt=''></img>
        <img src={south} onClick={() => handlechange(keyData[2]["name"])} className='hero-img-south pointingImg' alt=''></img>
        <img src={square} onClick={() => handlechange(keyData[7]["name"])} className='hero-img-square pointingImg' alt=''></img>
        <img src={triangule} onClick={() => handlechange(keyData[4]["name"])} className='hero-img-triangule pointingImg' alt=''></img>
        <img src={circle} onClick={() => handlechange(keyData[5]["name"])} className='hero-img-circle pointingImg' alt=''></img>
        <img src={ex} onClick={() => handlechange(keyData[6]["name"])} className='hero-img-ex pointingImg' alt=''></img>
        <div className='userSentence-title'>
          <span>List of user sequence:</span>
          {userSequence
          .map((letter,i) => <div key={i}>{letter}</div>)}
        </div>
      </div>
  )
}

export default Hero
