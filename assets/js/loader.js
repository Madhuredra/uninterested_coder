const preloader = document.getElementById('preloader');
window.addEventListener('load', setInterval(() => {
    preloader.style.display = 'none';
    
}, 1500));