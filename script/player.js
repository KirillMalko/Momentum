const  playBtn = document.querySelector('.play');

const  playNext = document.querySelector('.play-next');
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
console.log(playList[randomInt].src)

function randomInteger(min, max) {

    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}
function playAudio() {
    if(!isPlay){
        isPlay = true;
        audio.src = playList[randomInt].src;
        playBtn.classList.add('pause')
        playBtn.classList.remove('play')
        audio.currentTime = 0;
        audio.play();
    }else if(isPlay){
        audio.pause();
        isPlay = false
        playBtn.classList.remove('pause')
        playBtn.classList.add('play')
    }

}
function nextTreck(){
    if(randomInt < 4) {
        let newNum = randomInt
        newNum += 1;
        audio.src = playList[newNum].src;
        console.log(newNum)
    }else if(randomInt === 4){
        audio.src = playList[0].src;
    }

}
// function pauseAudio() {
//     audio.pause();
// }
playBtn.addEventListener('click', playAudio);
playNext.addEventListener('click', nextTreck);