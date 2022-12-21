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
    appendTen.innerText = tens.toString().padStart(2, '0')
    appendSec.innerText = sec.toString().padStart(2, '0')
    if (tens > 99) {
        tens = "0"
        sec++
        appendTen.innerText = "0" + tens
        appendSec.innerText = "0" + sec
        if (sec > 9) {
            appendSec.innerText = sec
        } if (sec > 59) {
            sec = 00
            appendSec.innerText = sec
            mins++
            appendMins.innerText = "0" + mins
        }
        if (mins > 59) {
            mins = 00
            appendMins.innerText = mins
            hours++
            appendHours.innerText = "0" + hours
        }
        if (hours < 9) {
            appendHours.innerText = tens.toString().padStart(2, '0')

        }
        if (hours > 24) {
            hours = 00
            appendHours = hours
        }

    }

}
resetBttn.addEventListener("click", function () {
    clearInterval(interval)
    sec = "00"
    tens = "00"
    mins = "00"
    hours = "00"
    appendSec.innerText = sec
    appendTen.innerText = tens
    appendMins.innerText = mins
    appendHours.innerText = hours
})
stopBttn.addEventListener("click", function() {
    clearInterval(interval)
    
})