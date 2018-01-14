const endTime = new Date();
endTime.setDate(endTime.getDate() + 2);
//endTime.setSeconds(endTime.getSeconds() + 3);

updateTimer();

let interval = setInterval(updateTimer, 1000);

function updateTimer() {
    let remainingTime = getRemainingTime(endTime);
    document.querySelector('.days').innerHTML = remainingTime.days ;
    document.querySelector('.hours').innerHTML = remainingTime.hours;
    document.querySelector('.minutes').innerHTML = remainingTime.minutes;
    document.querySelector('.seconds').innerHTML = remainingTime.seconds;

    if( remainingTime.timeDistance <= 0){
        clearInterval(interval);
    }
}

function getRemainingTime(endtime) {
    let timeDistance = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((timeDistance / 1000) % 60);
    let minutes = Math.floor((timeDistance / 1000 / 60) % 60);
    let hours = Math.floor((timeDistance / (1000 * 60 * 60)) % 24);
    let days = Math.floor(timeDistance / (1000 * 60 * 60 * 24));
    return {
      'timeDistance': timeDistance,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
}
