const nav = document.querySelector('.nav__list');
const burgerBtn = document.querySelector('.nav__burger-btn');

const handleNav = () => {
	const navItems = document.querySelectorAll('.nav__item');
	const burgerBar = document.querySelectorAll('.nav__burger-bar');
	burgerBar[0].classList.toggle('nav__burger-bar--rotate-first');
	burgerBar[1].classList.toggle('nav__burger-bar--hide');
	burgerBar[2].classList.toggle('nav__burger-bar--rotate-second');
	nav.classList.toggle('nav__active');
	document.body.classList.toggle('overflow-hidden');
	navItems.forEach((navItem) => {
		navItem.classList.add('nav__active');
	});
};

burgerBtn.addEventListener('click', handleNav);
