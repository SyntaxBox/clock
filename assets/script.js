let hr = document.querySelector(".hr");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let hrNumb = document.querySelector(".hr-numb");
let minNumb = document.querySelector(".min-numb");
let secNumb = document.querySelector(".sec-numb");

let clock = setInterval(function () {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (hours < 10) {
    hrNumb.innerHTML = "0" + hours;
  } else {
    hrNumb.innerHTML = hours;
  }
  if (minutes < 10) {
    minNumb.innerHTML = "0" + minutes;
  } else {
    minNumb.innerHTML = minutes;
  }
  if (seconds < 10) {
    secNumb.innerHTML = "0" + seconds;
  } else {
    secNumb.innerHTML = seconds;
  }

  hours = hours * 30 + minutes / 2;
  minutes = minutes * 6 + seconds / 10;
  seconds = seconds * 6;
  hr.style.transform = "rotate(" + hours + "deg)";
  min.style.transform = "rotate(" + minutes + "deg)";
  sec.style.transform = "rotate(" + seconds + "deg)";
}, 1000);
