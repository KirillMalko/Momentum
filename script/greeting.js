const date = new Date();
const hours = date.getHours();
let greeting = document.querySelector('.greeting');

const body = document.querySelector('body');
let randomMainBg = randomInteger(1, 20);
let timeOfDay = '';




function randomInteger(min, max) {

    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}




function setLocalStorage() {
    const name = document.querySelector('.name')
    localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    const name = document.querySelector('.name')
    if (localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}


if (hours > 5 && hours < 12) {
    greeting.innerHTML = 'Good morning,';
    timeOfDay = 'morning';

    body.style.backgroundImage = `url('https://raw.githubusercontent.com/KirillMalko/stage1-tasks/assets/images/morning/${randomMainBg.toString().padStart(2, '0')}.jpg')`
} else if (hours >= 12 && hours < 19) {
    greeting.innerHTML = 'Good afternoon,';
    timeOfDay = 'afternoon';
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/KirillMalko/stage1-tasks/assets/images/afternoon/${randomMainBg.toString().padStart(2, '0')}.jpg')`

} else if (hours >= 18 && hours <= 23) {
    greeting.innerHTML = 'Good evening,';
    timeOfDay = 'evening';
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/KirillMalko/stage1-tasks/assets/images/evening/${randomMainBg.toString().padStart(2, '0')}.jpg')`

} else if (hours >= 0 && hours <= 5) {
    greeting.innerHTML = 'Good night,';
    timeOfDay = 'night';
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/KirillMalko/stage1-tasks/assets/images/night/${randomMainBg.toString().padStart(2, '0')}.jpg')`
}
const nextSlide = () => {
    if (randomMainBg >= 1 && randomMainBg < 20) {
        body.style.backgroundImage = `url('https://raw.githubusercontent.com/KirillMalko/stage1-tasks/assets/images/${timeOfDay}/${randomMainBg++}.jpg')`

        body.style.backgroundImage = `url('https://raw.githubusercontent.com/KirillMalko/stage1-tasks/assets/images/${timeOfDay}/${randomMainBg.toString().padStart(2, '0')}.jpg')`
    } else if (randomMainBg === 20) {
        randomMainBg = 0;
        body.style.backgroundImage = `url('https://raw.githubusercontent.com/KirillMalko/stage1-tasks/assets/images/${timeOfDay}/${randomMainBg++}.jpg')`

        body.style.backgroundImage = `url('https://raw.githubusercontent.com/KirillMalko/stage1-tasks/assets/images/${timeOfDay}/${randomMainBg.toString().padStart(2, '0')}.jpg')`
    }
}
const prevSlide = () => {
    if (randomMainBg > 1 && randomMainBg <= 20) {
        body.style.backgroundImage = `url('https://raw.githubusercontent.com/KirillMalko/stage1-tasks/assets/images/${timeOfDay}/${randomMainBg--}.jpg')`

        body.style.backgroundImage = `url('https://raw.githubusercontent.com/KirillMalko/stage1-tasks/assets/images/${timeOfDay}/${randomMainBg.toString().padStart(2, '0')}.jpg')`
    } else if (randomMainBg = 1) {
        randomMainBg = 20;
        body.style.backgroundImage = `url('https://raw.githubusercontent.com/KirillMalko/stage1-tasks/assets/images/${timeOfDay}/${randomMainBg--}.jpg')`

        body.style.backgroundImage = `url('https://raw.githubusercontent.com/KirillMalko/stage1-tasks/assets/images/${timeOfDay}/${randomMainBg.toString().padStart(2, '0')}.jpg')`
    }
}

window.addEventListener('load', getLocalStorage)

document.querySelector(".slide-next").addEventListener('click', nextSlide)
document.querySelector(".slide-prev").addEventListener('click', prevSlide)
