let currentMusic = 0;

const music = document.querySelector('#audio');

const disc = document.querySelector('.disc');
const playBtn = document.querySelector('.play-btn'); 

playBtn.addEventListener('click', () => {
    playBtn.classList.toggle('pause');
    disk.classList.toggle('play');
})