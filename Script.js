let countDownDate = new Date("mar 16, 2025 00:00:00").getTime();

let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Update the countdown elements
  document.querySelector('#days').innerHTML = days;
  document.querySelector('#hours').innerHTML = hours;
  document.querySelector('#minutes').innerHTML = minutes;
  document.querySelector('#seconds').innerHTML = seconds;
  
  // If the countdown is over, stop the timer
  if (distance < 0) {
    clearInterval(x);
    document.querySelector('#days').innerHTML = 0;
    document.querySelector('#hours').innerHTML = 0;
    document.querySelector('#minutes').innerHTML = 0;
    document.querySelector('#seconds').innerHTML = 0;
  }
}, 1000);
