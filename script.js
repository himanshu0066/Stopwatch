const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
const time = document.querySelector('.time');

let startTime = new Date();
let LastTime = 0, state = "reset";

//Converting standard format to milliseconds
function ConvertToMilliseconds(input) {
    var secs = "";
    var mil = "";
    var i = 0;
    while (input[i] != ':')
        secs += input[i++];
    i++;
    while (input[i] != undefined)
        mil += input[i++];
    ans = (+secs) * 100 + (+mil);
    return ans;

}


//Converting the time to standard format
function ConvertToStandard(val) {
    let secs = Math.floor(val / 100);
    let mil = val % 100;

    if (secs < 10)
        secs = "0" + String(secs);
    if (mil < 10)
        mil = "0" + String(mil);

    return (secs + ":" + mil);
}


function calculateTime() {

    t = Math.floor((new Date() - startTime) / 10);

    return t;
}

function StartTimer() {
    startTime = new Date();

    interval = setInterval(() => {
        time.innerText = ConvertToStandard(LastTime + calculateTime());

    }, 10);
}


start.addEventListener('click', () => {
    if (state == "start")
        return;
    if (state != "reset")
        clearInterval(interval);
    StartTimer();
    state = "start";
})

//Reseting the Stopwatch
reset.addEventListener('click', () => {
    if (state != "reset")
        clearInterval(interval);
    state = "reset";

    time.innerText = ConvertToStandard(0);
    LastTime = 0;
})

stop.addEventListener('click', () => {
    if (state == "stop" || state == "reset")
        return;
    clearInterval(interval);
    LastTime = ConvertToMilliseconds(time.innerText);
    state = "stop";

})