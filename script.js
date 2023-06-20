// Get DOM elements
const clockElement = document.getElementById('clock');
const alarmTimeInput = document.getElementById('alarmTime');
const setAlarmButton = document.getElementById('setAlarmBtn');
const clearAlarmButton = document.getElementById('clearAlarmBtn');
const alarmSound = document.getElementById('alarmSound');

let alarmInterval;

// Set current time and start clock
function startClock() {
  const currentDate = new Date();
  const timeString = currentDate.toLocaleTimeString();
  clockElement.innerHTML = timeString;
}

// Check if the current time matches the alarm time
function checkAlarmTime() {
  const alarmTime = alarmTimeInput.value;
  const currentTime = new Date().toLocaleTimeString();

  if (alarmTime === currentTime) {
    clearInterval(alarmInterval);
    playAlarm();
  }
}

// Play the alarm sound
function playAlarm() {
  alarmSound.play();
}

// Stop the alarm sound and reset the alarm input field
function stopAlarm() {
  alarmSound.pause();
  alarmSound.currentTime = 0;
  alarmTimeInput.value = '';
}

// Event listeners for set and clear alarm buttons
setAlarmButton.addEventListener('click', () => {
  clearInterval(alarmInterval);
  alarmInterval = setInterval(checkAlarmTime, 1000);
});

clearAlarmButton.addEventListener('click', stopAlarm);

// Start the clock when the page loads
window.addEventListener('load', () => {
  startClock();
  setInterval(startClock, 1000);
});
