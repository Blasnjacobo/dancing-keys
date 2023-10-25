
export function checkWin(correctSequence, userSequence){
    let status = ""
        
    if (JSON.stringify(correctSequence) === JSON.stringify(userSequence))
    status = "win"
    else status= "lose"
return status
}