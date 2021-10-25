const dobtn = document.querySelector('.dodutton');
const dotext = document.querySelector('.dotext');
const dodel = document.querySelector('.dodel')
const dobtn2 = document.querySelector('.dodutton2');
const dotext2 = document.querySelector('.dotext2');
const dodel2 = document.querySelector('.dodel2')
const dobtn3 = document.querySelector('.dodutton3');
const dotext3 = document.querySelector('.dotext3');
const dodel3 = document.querySelector('.dodel3')
const dobtn4 = document.querySelector('.dodutton4');
const dotext4 = document.querySelector('.dotext4');
const dodel4 = document.querySelector('.dodel4')
const dobtn5 = document.querySelector('.dodutton5');
const dotext5 = document.querySelector('.dotext5');
const dodel5 = document.querySelector('.dodel5')
const dobtn6 = document.querySelector('.dodutton6');
const dotext6 = document.querySelector('.dotext6');
const dodel6 = document.querySelector('.dodel6')
const dobtn7 = document.querySelector('.dodutton7');
const dotext7 = document.querySelector('.dotext7');
const dodel7 = document.querySelector('.dodel7')
const dobtn8 = document.querySelector('.dodutton8');
const dotext8 = document.querySelector('.dotext8');
const dodel8 = document.querySelector('.dodel8')
const closetodo = document.querySelector('.closetodo')
const opentodo = document.querySelector('.todo-btn')





closetodo.onclick = function () {
    document.querySelector('.todolist').classList.add('off')
}
opentodo.onclick = function () {
    document.querySelector('.todolist').classList.remove('off')
}

dobtn.onclick = function () {
    dotext.classList.add('dodo');
    //     if (dotext.classList.contains('dodo')) {

    dobtn.style.backgroundColor = 'rgb(81, 255, 81)'
    dodel.style.backgroundColor = 'rgb(218,25,135)'
    dotext.style.backgroundColor = 'rgb(81, 255, 81)'

    if (dotext.value.length == 0) {
        dobtn.style.backgroundColor = 'white'
        dodel.style.backgroundColor = 'white'
        dotext.classList.remove('dodo')
        dotext.style.backgroundColor = 'white'
    }
}
function setDo() {

    localStorage.setItem('dotxt', dotext.value);
    localStorage.setItem('doclas', dotext.className)
    localStorage.setItem('dogreen', dobtn.style.backgroundColor)
    localStorage.setItem('dored', dodel.style.backgroundColor)
    localStorage.setItem('dogreenbg', dotext.style.backgroundColor)

}
window.addEventListener('beforeunload', setDo)

function getDo() {


    dotext.value = localStorage.getItem('dotxt');

    dotext.classList = localStorage.getItem('doclas');
    dobtn.style.backgroundColor = localStorage.getItem('dogreen');
    dodel.style.backgroundColor = localStorage.getItem('dored');
    dotext.style.backgroundColor = localStorage.getItem('dogreenbg');
}
window.addEventListener('load', getDo)

dodel.onclick = function () {
    localStorage.removeItem('dotxt')
    dotext.value = ''
    dotext.classList.remove('dodo')
    dobtn.style.backgroundColor = 'white'
    dodel.style.backgroundColor = 'white'
    dotext.style.backgroundColor = 'white'

}






dobtn2.onclick = function () {
    dotext2.classList.add('dodo');


    dobtn2.style.backgroundColor = 'rgb(81, 255, 81)'
    dodel2.style.backgroundColor = 'red'
    dotext2.style.backgroundColor = 'rgb(81, 255, 81)'

    if (dotext2.value.length == 0) {
        dobtn2.style.backgroundColor = 'white'
        dodel2.style.backgroundColor = 'white'
        dotext2.classList.remove('dodo')
        dotext2.style.backgroundColor = 'white'
    }
}
function setDo2() {

    localStorage.setItem('dotxt2', dotext2.value);
    localStorage.setItem('doclas2', dotext2.className)
    localStorage.setItem('dogreen2', dobtn2.style.backgroundColor)
    localStorage.setItem('dored2', dodel2.style.backgroundColor)
    localStorage.setItem('dogreenbg2', dotext2.style.backgroundColor)

}
window.addEventListener('beforeunload', setDo2)

function getDo2() {


    dotext2.value = localStorage.getItem('dotxt2');

    dotext2.classList = localStorage.getItem('doclas2');
    dobtn2.style.backgroundColor = localStorage.getItem('dogreen2');
    dodel2.style.backgroundColor = localStorage.getItem('dored2');
    dotext2.style.backgroundColor = localStorage.getItem('dogreenbg2');
}
window.addEventListener('load', getDo2)

dodel2.onclick = function () {
    localStorage.removeItem('dotxt2')
    dotext2.value = ''
    dotext2.classList.remove('dodo')
    dobtn2.style.backgroundColor = 'white'
    dodel2.style.backgroundColor = 'white'
    dotext2.style.backgroundColor = 'white'

}





dobtn3.onclick = function () {
    dotext3.classList.add('dodo');


    dobtn3.style.backgroundColor = 'rgb(81, 255, 81)'
    dodel3.style.backgroundColor = 'red'
    dotext3.style.backgroundColor = 'rgb(81, 255, 81)'

    if (dotext3.value.length == 0) {
        dobtn3.style.backgroundColor = 'white'
        dodel3.style.backgroundColor = 'white'
        dotext3.classList.remove('dodo')
        dotext3.style.backgroundColor = 'white'
    }
}
function setDo3() {

    localStorage.setItem('dotxt3', dotext3.value);
    localStorage.setItem('doclas3', dotext3.className)
    localStorage.setItem('dogreen3', dobtn3.style.backgroundColor)
    localStorage.setItem('dored3', dodel3.style.backgroundColor)
    localStorage.setItem('dogreenbg3', dotext3.style.backgroundColor)

}
window.addEventListener('beforeunload', setDo3)

function getDo3() {


    dotext3.value = localStorage.getItem('dotxt3');

    dotext3.classList = localStorage.getItem('doclas3');
    dobtn3.style.backgroundColor = localStorage.getItem('dogreen3');
    dodel3.style.backgroundColor = localStorage.getItem('dored3');
    dotext3.style.backgroundColor = localStorage.getItem('dogreenbg3');
}
window.addEventListener('load', getDo3)

dodel3.onclick = function () {
    localStorage.removeItem('dotxt3')
    dotext3.value = ''
    dotext3.classList.remove('dodo')
    dobtn3.style.backgroundColor = 'white'
    dodel3.style.backgroundColor = 'white'
    dotext3.style.backgroundColor = 'white'

}

dobtn4.onclick = function () {
    dotext4.classList.add('dodo');
    //     if (dotext.classList.contains('dodo')) {

    dobtn4.style.backgroundColor = 'rgb(81, 255, 81)'
    dodel4.style.backgroundColor = 'red'
    dotext4.style.backgroundColor = 'rgb(81, 255, 81)'

    if (dotext4.value.length == 0) {
        dobtn4.style.backgroundColor = 'white'
        dodel4.style.backgroundColor = 'white'
        dotext4.classList.remove('dodo')
        dotext4.style.backgroundColor = 'white'
    }
}
function setDo4() {

    localStorage.setItem('dotxt4', dotext4.value);
    localStorage.setItem('doclas4', dotext4.className)
    localStorage.setItem('dogreen4', dobtn4.style.backgroundColor)
    localStorage.setItem('dored4', dodel4.style.backgroundColor)
    localStorage.setItem('dogreenbg4', dotext4.style.backgroundColor)

}
window.addEventListener('beforeunload', setDo4)

function getDo4() {


    dotext4.value = localStorage.getItem('dotxt4');

    dotext4.classList = localStorage.getItem('doclas4');
    dobtn4.style.backgroundColor = localStorage.getItem('dogreen4');
    dodel4.style.backgroundColor = localStorage.getItem('dored4');
    dotext4.style.backgroundColor = localStorage.getItem('dogreenbg4');
}
window.addEventListener('load', getDo4)

dodel4.onclick = function () {
    localStorage.removeItem('dotxt4')
    dotext4.value = ''
    dotext4.classList.remove('dodo')
    dobtn4.style.backgroundColor = 'white'
    dodel4.style.backgroundColor = 'white'
    dotext4.style.backgroundColor = 'white'

}


dobtn5.onclick = function () {
    dotext5.classList.add('dodo');


    dobtn5.style.backgroundColor = 'rgb(81, 255, 81)'
    dodel5.style.backgroundColor = 'red'
    dotext5.style.backgroundColor = 'rgb(81, 255, 81)'

    if (dotext5.value.length == 0) {
        dobtn5.style.backgroundColor = 'white'
        dodel5.style.backgroundColor = 'white'
        dotext5.classList.remove('dodo')
        dotext5.style.backgroundColor = 'white'
    }
}
function setDo5() {

    localStorage.setItem('dotxt5', dotext5.value);
    localStorage.setItem('doclas5', dotext5.className)
    localStorage.setItem('dogreen5', dobtn5.style.backgroundColor)
    localStorage.setItem('dored5', dodel5.style.backgroundColor)
    localStorage.setItem('dogreenbg5', dotext5.style.backgroundColor)

}
window.addEventListener('beforeunload', setDo5)

function getDo5() {


    dotext5.value = localStorage.getItem('dotxt5');

    dotext5.classList = localStorage.getItem('doclas5');
    dobtn5.style.backgroundColor = localStorage.getItem('dogreen5');
    dodel5.style.backgroundColor = localStorage.getItem('dored5');
    dotext5.style.backgroundColor = localStorage.getItem('dogreenbg5');
}
window.addEventListener('load', getDo5)

dodel5.onclick = function () {
    localStorage.removeItem('dotxt5')
    dotext5.value = ''
    dotext5.classList.remove('dodo')
    dobtn5.style.backgroundColor = 'white'
    dodel5.style.backgroundColor = 'white'
    dotext5.style.backgroundColor = 'white'

}


dobtn6.onclick = function () {
    dotext6.classList.add('dodo');


    dobtn6.style.backgroundColor = 'rgb(81, 255, 81)'
    dodel6.style.backgroundColor = 'red'
    dotext6.style.backgroundColor = 'rgb(81, 255, 81)'

    if (dotext6.value.length == 0) {
        dobtn6.style.backgroundColor = 'white'
        dodel6.style.backgroundColor = 'white'
        dotext6.classList.remove('dodo')
        dotext6.style.backgroundColor = 'white'
    }
}
function setDo6() {

    localStorage.setItem('dotxt6', dotext6.value);
    localStorage.setItem('doclas6', dotext6.className)
    localStorage.setItem('dogreen6', dobtn6.style.backgroundColor)
    localStorage.setItem('dored6', dodel6.style.backgroundColor)
    localStorage.setItem('dogreenbg6', dotext6.style.backgroundColor)

}
window.addEventListener('beforeunload', setDo6)

function getDo6() {


    dotext6.value = localStorage.getItem('dotxt6');

    dotext6.classList = localStorage.getItem('doclas6');
    dobtn6.style.backgroundColor = localStorage.getItem('dogreen6');
    dodel6.style.backgroundColor = localStorage.getItem('dored6');
    dotext6.style.backgroundColor = localStorage.getItem('dogreenbg6');
}
window.addEventListener('load', getDo6)

dodel6.onclick = function () {
    localStorage.removeItem('dotxt6')
    dotext6.value = ''
    dotext6.classList.remove('dodo')
    dobtn6.style.backgroundColor = 'white'
    dodel6.style.backgroundColor = 'white'
    dotext6.style.backgroundColor = 'white'

}

dobtn7.onclick = function () {
    dotext7.classList.add('dodo');
    //     if (dotext.classList.contains('dodo')) {

    dobtn7.style.backgroundColor = 'rgb(81, 255, 81)'
    dodel7.style.backgroundColor = 'red'
    dotext7.style.backgroundColor = 'rgb(81, 255, 81)'

    if (dotext7.value.length == 0) {
        dobtn7.style.backgroundColor = 'white'
        dodel7.style.backgroundColor = 'white'
        dotext7.classList.remove('dodo')
        dotext7.style.backgroundColor = 'white'
    }
}
function setDo7() {

    localStorage.setItem('dotxt7', dotext7.value);
    localStorage.setItem('doclas7', dotext7.className)
    localStorage.setItem('dogreen7', dobtn7.style.backgroundColor)
    localStorage.setItem('dored7', dodel7.style.backgroundColor)
    localStorage.setItem('dogreenbg7', dotext7.style.backgroundColor)

}
window.addEventListener('beforeunload', setDo7)

function getDo7() {


    dotext7.value = localStorage.getItem('dotxt7');

    dotext7.classList = localStorage.getItem('doclas7');
    dobtn7.style.backgroundColor = localStorage.getItem('dogreen7');
    dodel7.style.backgroundColor = localStorage.getItem('dored7');
    dotext7.style.backgroundColor = localStorage.getItem('dogreenbg7');
}
window.addEventListener('load', getDo7)

dodel7.onclick = function () {
    localStorage.removeItem('dotxt7')
    dotext7.value = ''
    dotext7.classList.remove('dodo')
    dobtn7.style.backgroundColor = 'white'
    dodel7.style.backgroundColor = 'white'
    dotext7.style.backgroundColor = 'white'

}

dobtn8.onclick = function () {
    dotext8.classList.add('dodo');
    //     if (dotext.classList.contains('dodo')) {

    dobtn8.style.backgroundColor = 'rgb(81, 255, 81)'
    dodel8.style.backgroundColor = 'red'
    dotext8.style.backgroundColor = 'rgb(81, 255, 81)'

    if (dotext8.value.length == 0) {
        dobtn8.style.backgroundColor = 'white'
        dodel8.style.backgroundColor = 'white'
        dotext8.classList.remove('dodo')
        dotext8.style.backgroundColor = 'white'
    }
}
function setDo8() {

    localStorage.setItem('dotxt8', dotext8.value);
    localStorage.setItem('doclas8', dotext8.className)
    localStorage.setItem('dogreen8', dobtn8.style.backgroundColor)
    localStorage.setItem('dored8', dodel8.style.backgroundColor)
    localStorage.setItem('dogreenbg8', dotext8.style.backgroundColor)

}
window.addEventListener('beforeunload', setDo8)

function getDo8() {


    dotext8.value = localStorage.getItem('dotxt8');

    dotext8.classList = localStorage.getItem('doclas8');
    dobtn8.style.backgroundColor = localStorage.getItem('dogreen8');
    dodel8.style.backgroundColor = localStorage.getItem('dored8');
    dotext8.style.backgroundColor = localStorage.getItem('dogreenbg8');
}
window.addEventListener('load', getDo8)

dodel8.onclick = function () {
    localStorage.removeItem('dotxt8')
    dotext8.value = ''
    dotext8.classList.remove('dodo')
    dobtn8.style.backgroundColor = 'white'
    dodel8.style.backgroundColor = 'white'
    dotext8.style.backgroundColor = 'white'

}