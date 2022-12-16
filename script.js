const startBttn = document.getElementById('start-bttn')
const stopBttn = document.getElementById('stop-bttn')
const resetBttn = document.getElementById('reset-bttn')
let appendSec = document.getElementById('sec')
let appendTen = document.getElementById('ten')
var interval
var tens = "00"
var sec = "00"


startBttn.addEventListener(click, function startCount() {
    interval = setInterval(startCountDown, 10)
})
function startCountDown() {
    tens++
    if(tens <= 9){
        appendTen.innerText += "0" + tens
    }
    else if (tens > 99){
        tens = 0
        appendTen.innerText  += "0" + tens
        appendSec.innerText  += "0" + sec

    }
}