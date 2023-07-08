function showResume(){

    window.open('https://drive.google.com/file/d/1iM6bmBr6_PhBqoeGQUJ2PyiBol-bsgAP/view?usp=sharing');
}

function github(){
    
    window.open('https://github.com/Ankitsahu640');
}

function linkedin(){
    
    window.open('https://www.linkedin.com/in/ankit-sahu-269bb5201/');
}


function phone(){
    document.getElementById('show-social').innerText = "+91 6386410397";
}


function contactLinkedIn(){
    window.open('https://www.linkedin.com/in/ankit-sahu-269bb5201/')
}

function githubPN(){
    window.open('https://github.com/Ankitsahu640/MERN_PerfectNotes')
}
function githubEN(){
    window.open('https://github.com/Ankitsahu640/React-ExpressNews')
}
function githubMG(){
    window.open('https://github.com/Ankitsahu640/Memory-Game')
}
function githubLT(){
    window.open('https://github.com/Ankitsahu640/LetsTalk-ChatApp')
}
function githubTU(){
    window.open('https://github.com/Ankitsahu640/TextUtils')
}

function livePN(){
    window.open('https://ankitsahu640.github.io/MERN_PerfectNotes/')
}
function liveEN(){
    window.open('https://ankitsahu640.github.io/React-ExpressNews/')
}
function liveMG(){
    window.open('https://ankitsahu640.github.io/Memory-Game/')
}
function liveLT(){
    window.open('https://lets-talkchat-app.onrender.com/')
}
function liveTU(){
    window.open('https://ankitsahu640.github.io/TextUtils/')
}

function contact(){
    document.getElementById('social-show').innerText="+91 6386410397"
}

function socialLocation(){
    document.getElementById('social-show').innerText="Kanpur, UttarPradesh"
}




var popup1 = document.getElementById('popup-wrapper1');
var btn1 = document.getElementById("popup-gmail");
var btn5 = document.getElementById("popup-gmail-below");
var span1 = document.getElementById("close1");
btn1.onclick = function() {
    popup1.classList.add('show1');
}
btn5.onclick = function() {
    popup1.classList.add('show1');
}
span1.onclick = function() {
    popup1.classList.remove('show1');
}

window.onclick = function(event) {
    if (event.target == popup1) {
        popup1.classList.remove('show1');
    }
}



var popup2 = document.getElementById('popup-wrapper2');
var btn6 = document.getElementById("popup-location-below");
var btn2 = document.getElementById("popup-location");
var span2 = document.getElementById("close2");
btn2.onclick = function() {
    popup2.classList.add('show2');
}
btn6.onclick = function() {
    popup2.classList.add('show2');
}
span2.onclick = function() {
    popup2.classList.remove('show2');
}

window.onclick = function(event) {
    if (event.target == popup2) {
        popup2.classList.remove('show2');
    }
}



var popup3 = document.getElementById('popup-wrapper3');
var btn3 = document.getElementById("popup-phone");
var btn4 = document.getElementById("popup-phone-below");
var span3 = document.getElementById("close3");
btn3.onclick = function() {
    popup3.classList.add('show3');
}
btn4.onclick = function() {
    popup3.classList.add('show3');
}
span3.onclick = function() {
    popup3.classList.remove('show3');
}

window.onclick = function(event) {
    if (event.target == popup3) {
        popup3.classList.remove('show3');
    }
}