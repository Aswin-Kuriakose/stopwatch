const startBttn = document.getElementById('start-bttn')
const stopBttn = document.getElementById('stop-bttn')
const resetBttn = document.getElementById('reset-bttn')
let appendSec = document.getElementById('sec')
let appendTen = document.getElementById('ten')
let appendMins = document.getElementById('mins')
let appendHours = document.getElementById('hours')
var interval
var tens = 00
var sec = 00
var mins = 00
var hours = 00

startBttn.addEventListener("click", function startCount() {
    interval = setInterval(startCountDown, 10)
})
function startCountDown() {
    tens++
    if(tens <= 9){
        appendTen.innerText = "0" + tens
        appendSec.innerText =  sec 
    }
    else if (tens > 99){
        tens = "0"
        sec++
        appendTen.innerText  = "0" + tens
        appendSec.innerText = "0" +  sec
        if (sec > 9){
            appendSec.innerText = sec
        }else if (sec >= 60){
            appendSec.innerText = "00"
            mins++
            appendMins.innerText = "0" + mins
        }

    }else {
        appendSec.innerText = sec 
        appendTen.innerText = tens 
    }
}
resetBttn.addEventListener("click",function() {
    interval = clearInterval
    sec = "00"
    tens = "00"
    appendSec.innerText = sec
    appendTen.innerText = tens
})
stopBttn.addEventListener("click", function() {
    interval = clearInterval
    appendSec = sec
    appendTen = tens
})