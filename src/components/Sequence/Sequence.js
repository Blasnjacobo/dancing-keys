import React from 'react'
import "./Sequence.css"

const Sequence = ({enabled, correctSequence}) => {
  return (
    <div className='correctSentence-list' style={enabled ? {display: "grid"} : {display:"none"}}>
        <span className='correctSentence-title'>List of sequence to follow:</span>
        {correctSequence
        .map((letter,i) => <div key={i}>{letter}</div>)}
    </div>
    )
  }
export default Sequence
