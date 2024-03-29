const nav = document.querySelector('.nav__list');
const navItems = document.querySelectorAll('.nav__item');
const burgerBtn = document.querySelector('.nav__burger-btn');
const counterContainer = document.querySelector('.about__counter');
const teamButtons = document.querySelectorAll('.about-team__button');
const teamPictures = document.querySelectorAll('.about-team__pic');
const projectButtons = document.querySelectorAll('.projects__button');
const projectPictures = document.querySelectorAll('.projects__pic');
const opinionContents = document.querySelectorAll('.opinion__content');
const opinionPrevButton = document.querySelector('.fa-chevron-left');
const opinionNextButton = document.querySelector('.fa-chevron-right');
const logoContainer = document.querySelector('.clients__container');
const clientsLogos = document.querySelectorAll('.clients__logo');
const accordionBtns = document.querySelectorAll('.accordion__button');
const inputEmailButton = document.querySelector('.footer__input-btn');
const sections = document.querySelectorAll('section');
const options = {
	rootMargin: '-25px',
};
const scrollSpyOptions = {
	rootMargin: '-300px',
};
let index = 0;
let countOne;
let countTwo;
let countThree;

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

const counter = () => {
	let numOne;
	numOne = 0;
	let numTwo;
	numTwo = 0;
	let numThree;
	numThree = 0;
	const counterNum = document.querySelectorAll('.about__counter-number');
	counterNum[0].textContent = numOne;
	counterNum[1].textContent = numTwo;
	counterNum[2].textContent = numThree;
	countOne = setInterval(function () {
		if (numOne < 26) {
			numOne++;
			counterNum[0].textContent = numOne;
		}
	}, 70);
	countTwo = setInterval(function () {
		if (numTwo < 58) {
			numTwo++;
			counterNum[1].textContent = numTwo;
		}
	}, 70);
	countThree = setInterval(function () {
		if (numThree < 76) {
			numThree++;
			counterNum[2].textContent = numThree;
		}
	}, 70);
};

const startCounter = (entry) => {
	if (entry[0].isIntersecting) {
		clearInterval(countOne);
		clearInterval(countTwo);
		clearInterval(countThree);
		counter();
	}
};
const startLogoSlider = (entry) => {
	if (entry[0].isIntersecting) {
		logoContainer.classList.add('slider-animation');
	}
};
const changeGallery = (e) => {
	let text = e.target.textContent.toLowerCase();
	projectButtons.forEach((btn) => {
		if (btn === e.target) {
			btn.classList.add('active__button');
		} else {
			btn.classList.remove('active__button');
		}
	});
	projectPictures.forEach((picture) => {
		if (picture.classList.contains(text)) {
			picture.classList.replace('hidden', 'on-view');
		} else {
			picture.classList.replace('on-view', 'hidden');
		}
	});
};

const changeTeamGallery = (e) => {
	let text = e.target.textContent.toLowerCase();
	teamButtons.forEach((btn) => {
		if (btn === e.target) {
			btn.classList.add('active__button');
		} else {
			btn.classList.remove('active__button');
		}
	});
	teamPictures.forEach((picture) => {
		if (picture.classList.contains(text)) {
			picture.classList.replace('hidden', 'on-view');
		} else {
			picture.classList.replace('on-view', 'hidden');
		}
	});
};

const hideOpinion = () => {
	opinionContents.forEach((content) => {
		if (content.classList.contains('on-view')) {
			content.classList.replace('on-view', 'hidden');
		}
	});
};
const changeOpinion = () => {
	opinionContents[index].classList.replace('hidden', 'on-view');
	opinionContents[index + 1].classList.replace('hidden', 'on-view');
};
const nextOpinion = () => {
	if (index > opinionContents.length - 3) {
		index = 0;
		hideOpinion();
	} else if (index >= 0) {
		index = index + 2;
		hideOpinion();
	}
	changeOpinion();
};
const prevOpinion = () => {
	if (index === 0) {
		index = opinionContents.length - 2;
		hideOpinion();
	} else if (index < opinionContents.length - 1) {
		index = index - 2;
		hideOpinion();
	}
	changeOpinion();
};

burgerBtn.addEventListener('click', handleNav);
navItems.forEach((el) => {
	el.addEventListener('click', hideMenu);
});

projectButtons.forEach((btn) => {
	btn.addEventListener('click', changeGallery);
});
teamButtons.forEach((btn) => {
	btn.addEventListener('click', changeTeamGallery);
});
opinionNextButton.addEventListener('click', nextOpinion);
opinionPrevButton.addEventListener('click', prevOpinion);

const showPanel = function () {
	const accordionPanel = this.nextElementSibling;
	this.firstElementChild.classList.toggle('rotate');
	accordionPanel.classList.toggle('show');
	accordionPanel.firstElementChild.classList.toggle('show-txt');
};

const mailValidation = () => {
	const mailInput = document.querySelector('.footer__input-mail');
	let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
	console.log(mailInput.value);
	if (mailInput.value.match(regex)) {
		console.log('dobrze');
	} else {
		console.log('chujowo');
	}
};

accordionBtns.forEach((el) => {
	el.addEventListener('click', showPanel);
});
inputEmailButton.addEventListener('click', mailValidation);
const observerCounter = new IntersectionObserver(startCounter, options);

observerCounter.observe(counterContainer);

const observerLogoSlider = new IntersectionObserver(startLogoSlider, options);

observerLogoSlider.observe(logoContainer);

const scrollSpy = (entries) => {
	for (const entry of entries) {
		if (entry.isIntersecting) {
			for (let i = 0; i < navItems.length; i++) {
				if (entry.target === sections[i - 1] && i > 0) {
					console.log(entry.target);
					console.log(i);
					navItems[i].classList.add('nav__desktop-active');
				} else {
					navItems[i].classList.remove('nav__desktop-active');
				}
			}
		}
	}
};

const observer = new IntersectionObserver(scrollSpy, scrollSpyOptions);
sections.forEach((section) => {
	observer.observe(section);
});
