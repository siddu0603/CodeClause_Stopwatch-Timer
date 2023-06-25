function rotateClockHands() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
  
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');
  
    const hourRotation = 360 / 12 * (hours % 12) + 360 / 12 / 60 * minutes;
    const minuteRotation = 360 / 60 * minutes + 360 / 60 / 60 * seconds;
    const secondRotation = 360 / 60 * seconds;
  
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
  }
  
  setInterval(rotateClockHands, 1000);
  var btn = document.getElementById('btn')

function leftClick() {

  btn.style.left = '110px'
}

function rightClick() {
  btn.style.left = '0';
	
}