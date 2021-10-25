const settingBtn = document.querySelector('.sett-btn');
const settingList = document.querySelector('.main-settings');
const weatherBtn = document.querySelector('.weather-btn');
const weatherList = document.querySelector('.weather');
const playerBtn = document.querySelector('.player-btn');
const player = document.querySelector('.player');
const quoteBtn = document.querySelector('.quote-btn');
const quotelist = document.querySelector('.footer');
const greetingBtn = document.querySelector('.greeting-btn');
const greetinglist = document.querySelector('.greeting-container');
const timeBtn = document.querySelector('.timebtn');
const dateBtn = document.querySelector('.date-btn');
const datelist = document.querySelector('.date');
const closesett = document.querySelector('.closesett')

settingBtn.onclick = function () {
    settingList.classList.toggle('off');
}
closesett.onclick = function () {
    settingList.classList.add('off')
}





weatherBtn.onclick = function () {
    weatherList.classList.toggle('off');
    if (weatherList.classList.contains('off')) {
        weatherBtn.textContent = 'Show'
        weatherBtn.style.backgroundColor = 'red'

    } else {
        weatherBtn.textContent = 'Hide'
        weatherBtn.style.backgroundColor = 'rgb(81, 255, 81)'
    }

}
function setWeathLoc() {

    localStorage.setItem('weathshow', weatherBtn.textContent);
    localStorage.setItem('weathcolor', weatherBtn.style.backgroundColor);
    localStorage.setItem('weathoff', weatherList.className)
}
window.addEventListener('beforeunload', setWeathLoc)

function getWeathLoc() {


    weatherBtn.textContent = localStorage.getItem('weathshow');
    weatherBtn.style.backgroundColor = localStorage.getItem('weathcolor');
    weatherList.classList = localStorage.getItem('weathoff');
}
window.addEventListener('load', getWeathLoc)


playerBtn.onclick = function () {
    player.classList.toggle('off');
    if (player.classList.contains('off')) {
        playerBtn.textContent = 'Show'
        playerBtn.style.backgroundColor = 'red'
    } else {
        playerBtn.textContent = 'Hide'
        playerBtn.style.backgroundColor = 'rgb(81, 255, 81)'
    }

}
function setPlLoc() {

    localStorage.setItem('plshow', playerBtn.textContent);
    localStorage.setItem('plcolor', playerBtn.style.backgroundColor);
    localStorage.setItem('ploff', player.className)
}
window.addEventListener('beforeunload', setPlLoc)

function getPlLoc() {


    playerBtn.textContent = localStorage.getItem('plshow');
    playerBtn.style.backgroundColor = localStorage.getItem('plcolor');
    player.classList = localStorage.getItem('ploff');
}
window.addEventListener('load', getPlLoc)


quoteBtn.onclick = function () {
    quotelist.classList.toggle('off');
    if (quotelist.classList.contains('off')) {
        quoteBtn.textContent = 'Show'
        quoteBtn.style.backgroundColor = 'red'
    } else {
        quoteBtn.textContent = 'Hide'
        quoteBtn.style.backgroundColor = 'rgb(81, 255, 81)'

    }

}
function setQuLoc() {

    localStorage.setItem('qushow', quoteBtn.textContent);
    localStorage.setItem('qucolor', quoteBtn.style.backgroundColor);
    localStorage.setItem('quoff', quotelist.className)
}
window.addEventListener('beforeunload', setQuLoc)

function getQuLoc() {


    quoteBtn.textContent = localStorage.getItem('qushow');
    quoteBtn.style.backgroundColor = localStorage.getItem('qucolor');
    quotelist.classList = localStorage.getItem('quoff');
}
window.addEventListener('load', getQuLoc)








greetingBtn.onclick = function () {
    greetinglist.classList.toggle('off');
    if (greetinglist.classList.contains('off')) {
        greetingBtn.textContent = 'Show'
        greetingBtn.style.backgroundColor = 'red'
    } else {
        greetingBtn.textContent = 'Hide'
        greetingBtn.style.backgroundColor = 'rgb(81, 255, 81)'
    }

}
function setGrLoc() {

    localStorage.setItem('grshow', greetingBtn.textContent);
    localStorage.setItem('grcolor', greetingBtn.style.backgroundColor);
    localStorage.setItem('groff', greetinglist.className)
}
window.addEventListener('beforeunload', setGrLoc)

function getGrLoc() {


    greetingBtn.textContent = localStorage.getItem('grshow');
    greetingBtn.style.backgroundColor = localStorage.getItem('grcolor');
    greetinglist.classList = localStorage.getItem('groff');
}
window.addEventListener('load', getGrLoc)









timeBtn.onclick = function () {
    time.classList.toggle('off');
    if (time.classList.contains('off')) {
        timeBtn.textContent = 'Show'
        timeBtn.style.backgroundColor = 'red'
    } else {
        timeBtn.textContent = 'Hide'
        timeBtn.style.backgroundColor = 'rgb(81, 255, 81)'
    }
}
function setTimeLoc() {

    localStorage.setItem('timeshow', timeBtn.textContent);
    localStorage.setItem('timecolor', timeBtn.style.backgroundColor);
    localStorage.setItem('timeoff', time.className)
}
window.addEventListener('beforeunload', setTimeLoc)

function getTimeLoc() {


    timeBtn.textContent = localStorage.getItem('timeshow');
    timeBtn.style.backgroundColor = localStorage.getItem('timecolor');
    time.classList = localStorage.getItem('timeoff');
}
window.addEventListener('load', getTimeLoc)







dateBtn.onclick = function () {

    datelist.classList.toggle('off');
    if (datelist.classList.contains('off')) {
        dateBtn.textContent = 'Show'
        dateBtn.style.backgroundColor = 'red'
    } else {
        dateBtn.textContent = 'Hide'
        dateBtn.style.backgroundColor = 'rgb(81, 255, 81)'
    }
}

function setDateLoc() {

    localStorage.setItem('dtshow', dateBtn.textContent);
    localStorage.setItem('dtcolor', dateBtn.style.backgroundColor);
    localStorage.setItem('dtoff', datelist.className)
}
window.addEventListener('beforeunload', setDateLoc)

function getDateLoc() {


    dateBtn.textContent = localStorage.getItem('dtshow');
    dateBtn.style.backgroundColor = localStorage.getItem('dtcolor');
    datelist.classList = localStorage.getItem('dtoff');
}
window.addEventListener('load', getDateLoc)





