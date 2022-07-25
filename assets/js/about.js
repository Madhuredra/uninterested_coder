function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


  
  var type  = new Typed(".typing" ,   {
    strings:["","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"],
    typeSpeed:40,
    backspeed:20,
    loop:true
})

var type  = new Typed(".typing1" ,   {
  strings:["","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"],
  typeSpeed:40,
  backspeed:20,
  loop:true
})
var type  = new Typed(".typing2" ,   {
  strings:["","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"],
  typeSpeed:40,
  backspeed:20,
  loop:true
})
var type  = new Typed(".typing3" ,   {
  strings:["","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"],
  typeSpeed:40,
  backspeed:20,
  loop:true
})

window.addEventListener("scroll", function() {
  var scroll = window.scrollY;
  var height = window.innerHeight;
  if(scroll>=height){
    document.querySelector('.gototop').style.visibility = 'visible';
  }
  else{
    document.querySelector('.gototop').style.visibility = 'hidden';
  }
})

var gototop = document.querySelector('.gototop');
gototop.classList.add('addanimation');
gototop.addEventListener('mouseover', function(){
  gototop.classList.remove('addanimation');
})
gototop.addEventListener('mousemove', function(){
  gototop.classList.add('addanimation');
})