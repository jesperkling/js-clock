let startTime = setInterval(() => {
    timer()
}, 1000);


function timer () {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    hour = checkTime(hour);
    minute = checkTime(minute);
    second = checkTime(second);
    

    document.getElementById("hour").innerText = hour;
    document.getElementById("minute").innerText = minute;
    document.getElementById("second").innerText = second;
   
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

