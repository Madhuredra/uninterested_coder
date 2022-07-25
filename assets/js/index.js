//Dark Mode Toggle Start
const checkbox = document.getElementById('checkbox');
var audio = new Audio('assets/sounds/darkmode.mp3');
checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark-mode');
  audio.play();
})

//Dark Mode Toggle End

//Sliding Images Start
const images = ["assets/images/backgroundimg.png","assets/images/backgroundimg1.png", "assets/images/backgroundimg2.png", "assets/images/backgroundimg3.png","assets/images/backgroundimg4.png"];
let i  = 0;
function slideImg(){
  document.slide.src = images[i];
  if(i<images.length-1){
      i++;
  }else{
      i=0;
  }
  setTimeout("slideImg()" , 3000);
}
window.onload = slideImg;
//Sliding Images End

//Fetching Data from API Start

const quotes = document.querySelector('.quotes');

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // console.log(data[0].text);
    let num = Math.floor(Math.random() * data.length);
    quotes.innerHTML = data[num].text + " - " + data[num].author;
  });

//Fetching Data from API End

