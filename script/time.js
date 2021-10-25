const time = document.querySelector('.time');




function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    
    time.textContent = currentTime;
    setTimeout(showTime, showDate, 1000);
}
showTime();
const dateCont = document.querySelector('date')
function showDate() {
    const date = new Date();
    const options = {month: 'long', day: 'numeric', weekday: 'long'};
    const currentDate = date.toLocaleDateString('en-EN', options);
    dateCont.textContent = currentDate;
}
showDate()

