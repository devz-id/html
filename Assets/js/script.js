// Swiper Script

const swiper = new Swiper('.swiper', {
	navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Typed Script
var typed = new Typed('#multiple-text', {
	strings: ['frontend developer', 'backend developer', 'mahasiswa'],
	typeSpeed: 100,
	backSpeed: 100,
	backDelay: 1000,
	loop: true
})

