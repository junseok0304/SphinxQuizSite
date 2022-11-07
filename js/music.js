const audioContainer = document.querySelector('#audioContainer');
const playBtn = document.querySelector('.js-playBtn');
const stopBtn = document.querySelector('.js-stopBtn')
const audioNextBtn = document.querySelector('.js-audioNextBtn');

const MUSIC_COUNT = 3; // 음악 갯수

let currentAudio = 1; // 현재 음악

function playAudio() {
  audioContainer.volume = 0.2;
  audioContainer.loop = true;
  audioContainer.play();  
}

function stopAudio() {
  audioContainer.pause();  
}

function loadAudio() {
  const source = document.querySelector('#audioSource');
  source.src = `audio/${currentAudio}.mp3`;
  audioContainer.load();
  playAudio();
}
function handleNextButtonClick() { 
  if (currentAudio < MUSIC_COUNT) {
    currentAudio += 1;
  } else {
    currentAudio = 1;
  }
  audioContainer.pause();
  loadAudio();
}

playBtn.addEventListener('click', loadAudio);
stopBtn.addEventListener('click', stopAudio);
audioNextBtn.addEventListener('click', handleNextButtonClick);