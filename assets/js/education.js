const ten = document.querySelector('.ten');
const twelve = document.querySelector('.twelve');
const Btech = document.querySelector('.Btech');
var audio = new Audio('assets/sounds/darkmode.mp3');
ten.addEventListener('click', function() {
    document.querySelector('.tenth').style.zIndex = '1';
    document.querySelector('.twelfth').style.zIndex = '0';
    document.querySelector('.Btech').style.zIndex = '0';
    ten.classList.add('active_button');
    twelve.classList.remove('active_button');
    Btech.classList.remove('active_button');
    audio.play();

});

twelve.addEventListener('click', function() {
    document.querySelector('.tenth').style.zIndex = '0';
    document.querySelector('.twelfth').style.zIndex = '1';
    document.querySelector('.Btech').style.zIndex = '0';
    twelve.classList.add('active_button');
    ten.classList.remove('active_button');
    Btech.classList.remove('active_button');
    audio.play();

});

Btech.addEventListener('click', function() {
    document.querySelector('.tenth').style.zIndex = '0';
    document.querySelector('.twelfth').style.zIndex = '0';
    document.querySelector('.Btech').style.zIndex = '1';
    Btech.classList.add('active_button');
    ten.classList.remove('active_button');
    twelve.classList.remove('active_button');
    audio.play();
});





