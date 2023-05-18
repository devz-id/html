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
