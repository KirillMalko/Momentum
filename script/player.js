const  playBtn = document.querySelector('.play');
const playPrev = document.querySelector('.play-prev');
const playListContainer = document.querySelector('.play-list');
const  playNext = document.querySelector('.play-next');
playBtn.addEventListener('click', playAudio);
playBtn.addEventListener('click', toggleBtn);
playPrev.addEventListener('click', prevTreck);
playNext.addEventListener('click', nextTreck);

let playNum = 0;
let isPlay = false;
let audio = new Audio();
let randomInt = randomInteger(1, 4)


const playList = [
    {
        title: 'Aqua Caelestis',
        src: '../assets/sounds/Aqua Caelestis.mp3',
        duration: '00:58'
    },
    {
        title: 'River Flows In You',
        src: '../assets/sounds/River Flows In You.mp3',
        duration: '03:50'
    },
    {
        title: 'Ennio Morricone',
        src: '../assets/sounds/Ennio Morricone.mp3',
        duration: '01:38'
    },
    {
        title: 'Summer Wind',
        src: '../assets/sounds/Summer Wind.mp3',
        duration: '01:51'
    }

]


function randomInteger(min, max) {

    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}
function playAudio() {
    if(!isPlay){
        isPlay = true;
        audio.src = playList[playNum].src;
        audio.currentTime = 0;
        audio.play();
    }else if(isPlay){
        audio.pause();
        isPlay = false

    }

}

function toggleBtn() {
    if(isPlay) {
        playBtn.classList.add('pause');
    } else {
        playBtn.classList.remove('pause');
    }
}
function nextTreck(){
    if(playNum !== 3) {
        playNum += 1;
    } else {
        playNum = 0;
    }
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    audio.play();

}

function prevTreck() {
    if(playNum === 0) {
        playNum = 3;
    } else {
        playNum = playNum - 1;
    }
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    audio.play();

}



for(let i = 0; i < playList.length; i++) {
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = playList[i].title;
    playListContainer.append(li);
}
