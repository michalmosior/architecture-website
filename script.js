const nav = document.querySelector('.nav__list');
const burgerBtn = document.querySelector('.nav__burger-btn');

const handleNav = () => {
	burgerAnimation();
	menuLinkAnimation();
	nav.classList.toggle('nav__active');
	document.body.classList.toggle('overflow-hidden');
};

const burgerAnimation = () => {
	const burgerBar = document.querySelectorAll('.nav__burger-bar');
	burgerBar[0].classList.toggle('nav__burger-bar--rotate-first');
	burgerBar[1].classList.toggle('nav__burger-bar--hide');
	burgerBar[2].classList.toggle('nav__burger-bar--rotate-second');
};

const menuLinkAnimation = () => {
	const navItems = document.querySelectorAll('.nav__item');
	navItems.forEach((navItem) => {
		navItem.classList.toggle('nav__active');
	});
};
burgerBtn.addEventListener('click', handleNav);
