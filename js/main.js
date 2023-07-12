const mobileNavIcon = document.querySelector('.nav-icon');
const mobileNavButton = document.querySelector('.mobile-nav-btn');
const mobileNavMenu = document.querySelector('.mobile-nav__menu');

mobileNavButton.addEventListener('click',() => {
	mobileNavIcon.classList.toggle('nav-icon-active');
	mobileNavMenu.classList.toggle('mobile-nav__menu--active');
	document.body.classList.toggle('no-scroll');

});