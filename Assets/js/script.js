// Swiper Script

const swiper = new Swiper('.swiper', {
	navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// Animation And Update Text

let andElement = document.getElementById("and");
function updateText() {
  let screenWidth = window.innerWidth;
  if (screenWidth <= 576) {
    andElement.innerHTML = "i am a ";
  } else {
    andElement.innerHTML = "and i'm a ";
  }
  
  andElement.insertAdjacentHTML('beforeend', '<span id="multiple-text"></span>');

  let typed = new Typed('#multiple-text', {
    strings: ['frontend developer', 'backend developer', 'mahasiswa'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
}

updateText();
window.addEventListener("resize", updateText);


// menu 

let menuIcon = document.getElementById('menuIcon');
let menuActive = document.getElementById('menuActive');
let xicon = document.getElementById('xIcon');
let body = document.querySelector('body')

  function hideMenu(){
    menuIcon.style.display = 'none';
    menuActive.style.right = '0';
    xicon.style.display = 'block';
  }

  menuIcon.addEventListener('click', hideMenu);



  function hideXicon() {
    xicon.style.display = 'none';
    menuActive.style.right = '-100%';
    menuIcon.style.display = 'block';
  }


  body.addEventListener('click', function(event) {
  let clickedElement = event.target;
  
  if (clickedElement.id === 'xIcon' || clickedElement.tagName === 'DIV' || clickedElement.tagName === 'SECTION' || clickedElement.tagName === 'NAV' ) {
    hideXicon();
  }
});