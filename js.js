const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

document.addEventListener('DOMContentLoaded',function(event){
    var dataText = [ "Coding is passion!" , "Full-Stack Web Development!", "Expertise for your next project!"];
    
    function typeWriter(text, i, fnCallback) {
      if (i < (text.length)) {
       document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 4000);
      }
    }
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 10000);
       }

      if (i < dataText[i].length) {
       typeWriter(dataText[i], 0, function(){
         StartTextAnimation(i + 1);
       });
      }
    }
    StartTextAnimation(0);
  });

const animation = document.querySelector('.animation');
const text = document.querySelector('.text');
const textbackground = document.querySelector('.animation-text-trigger');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const logobackground = document.querySelector('.animation-logo-background');

const observer = new IntersectionObserver(entries => {
  text.classList.toggle( 'texttrigger', entries[0].isIntersecting );
  textbackground.classList.toggle( 'animation-text-trigger', entries[0].isIntersecting );
  left.classList.toggle( 'lefttrigger', entries[0].isIntersecting );
  right.classList.toggle( 'righttrigger', entries[0].isIntersecting );
  logobackground.classList.toggle( 'animation-logo-background', entries[0].isIntersecting );
});

observer.observe( animation );



let button = document.getElementById("top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}


