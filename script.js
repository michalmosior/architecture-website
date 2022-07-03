const nav = document.querySelector('.nav__list');
const burgerBtn = document.querySelector('.nav__burger-btn');
const navItems = document.querySelectorAll('.nav__item');

const handleNav = () => {
	burgerAnimation();
	menuLinkAnimation();
	nav.classList.toggle('nav__active');
	document.body.classList.toggle('overflow-hidden');
};
function burgerAnimation() {
	const burgerBar = document.querySelectorAll('.nav__burger-bar');
	burgerBar[0].classList.toggle('nav__burger-bar--rotate-first');
	burgerBar[1].classList.toggle('nav__burger-bar--hide');
	burgerBar[2].classList.toggle('nav__burger-bar--rotate-second');
}

const menuLinkAnimation = () => {
	navItems.forEach((navItem) => {
		navItem.classList.toggle('nav__active');
	});
};

const hideMenu = () => {
	navItems.forEach((navItem) => {
		navItem.classList.toggle('nav__active');
	});
	document.body.classList.remove('overflow-hidden');
	nav.classList.toggle('nav__active');
	burgerAnimation();
};

burgerBtn.addEventListener('click', handleNav);
navItems.forEach((el) => {
	el.addEventListener('click', hideMenu);
});
