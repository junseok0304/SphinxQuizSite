const audioContainer = document.querySelector('#audioContainer');
const playBtn = document.querySelector('.js-playBtn');
const stopBtn = document.querySelector('.js-stopBtn')

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

loadAudio();
playAudio();
stopBtn.addEventListener('click', stopAudio);
playBtn.addEventListener('click', loadAudio);
