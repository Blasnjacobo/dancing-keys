import { checkWin } from "../Helpers/Helper";

export default function Popup (props) {
  let {correctSequence, userSequence, popup, playAgain, setResult, round} = props
  let finalMessage = "";
  let finalMessageSequence= "";
  console.log(correctSequence)
  console.log(userSequence)
  if (checkWin (correctSequence,  userSequence) === "win"){
  finalMessage = `Well done dude, you have sucessfully completed Round ${round}, congratulations!!! 💃🏽`
  setResult("win")
} else if (checkWin (correctSequence, userSequence) === "lose"){
  finalMessage = "TOO BAD, wrong answer, but nice try, you can play again"
  finalMessageSequence = `The sequence was: ${correctSequence}`
  setResult("lose")
}
console.log(popup)
  return (
  <div className="popup-container" style={popup ? {display: "flex"} : {}}>
      <div className="popup">
          <h2>{finalMessage}</h2>
          <h3>{finalMessageSequence}</h3>
          <h3>Last round: {round}</h3>
          <button onClick={playAgain}>Play Again</button>
      </div>
  </div>
)
}
  