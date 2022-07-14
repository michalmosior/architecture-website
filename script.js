const nav = document.querySelector('.nav__list');
const navItems = document.querySelectorAll('.nav__item')
const burgerBtn = document.querySelector('.nav__burger-btn')
const counterContainer = document.querySelector('.about__counter')
const logoContainer = document.querySelector('.clients__container')
const clientsLogos = document.querySelectorAll('.clients__logo')
const projectButtons = document.querySelectorAll('.projects__button')
const projectPictures = document.querySelectorAll('.projects__pic')
const opinionContents = document.querySelectorAll('.opinion__content')
const opinionPrevButton = document.querySelector('.fa-chevron-left')
const opinionNextButton = document.querySelector('.fa-chevron-right')
const options = {
  rootMargin: '-25px'
}




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

const counter = () => {
  let num
  let count
  num = 0
  const counterNum = document.querySelector('.about__counter-number')
  counterNum.textContent = num
  count = setInterval(function() {
    if (num < 26) {
      num++
      counterNum.textContent = num;
    }
  }, 70)
}

const startCounter = entry => {
  if (entry[0].isIntersecting) {
    counter()
  }
}
const startLogoSlider = entry => {
  if (entry[0].isIntersecting) {
    logoContainer.classList.add('slider-animation')
  }
}
const changeGallery = (e) => {
  let text = e.target.textContent.toLowerCase();
  projectButtons.forEach((btn) => {
    if (btn === e.target) {
      btn.classList.add('active__button')
    } else {
      btn.classList.remove('active__button')
    }
  })
  projectPictures.forEach((picture) => {
    if (picture.classList.contains(text)) {
      picture.classList.replace('hidden', 'on-view')
    } else {
      picture.classList.replace('on-view', 'hidden')
    }
  })
}

const nextOpinion = () => {
  if (opinionContents[0].classList.contains('on-view')) {
    opinionContents[0].classList.replace('on-view', 'hidden')
    opinionContents[1].classList.replace('on-view', 'hidden')
    opinionContents[2].classList.replace('hidden', 'on-view')
    opinionContents[3].classList.replace('hidden', 'on-view')
  } else if (opinionContents[3].classList.contains('on-view')) {
    opinionContents[2].classList.replace('on-view', 'hidden')
    opinionContents[3].classList.replace('on-view', 'hidden')
    opinionContents[4].classList.replace('hidden', 'on-view')
    opinionContents[5].classList.replace('hidden', 'on-view')
  } else {
    opinionContents[4].classList.replace('on-view', 'hidden')
    opinionContents[5].classList.replace('on-view', 'hidden')
    opinionContents[0].classList.replace('hidden', 'on-view')
    opinionContents[1].classList.replace('hidden', 'on-view')
  }
}

const prevOpinion = () => {
  if (opinionContents[0].classList.contains('on-view')) {
    opinionContents[0].classList.replace('on-view', 'hidden')
    opinionContents[1].classList.replace('on-view', 'hidden')
    opinionContents[4].classList.replace('hidden', 'on-view')
    opinionContents[5].classList.replace('hidden', 'on-view')
  } else if (opinionContents[4].classList.contains('on-view')) {
    opinionContents[4].classList.replace('on-view', 'hidden')
    opinionContents[5].classList.replace('on-view', 'hidden')
    opinionContents[2].classList.replace('hidden', 'on-view')
    opinionContents[3].classList.replace('hidden', 'on-view')
  } else {
    opinionContents[2].classList.replace('on-view', 'hidden')
    opinionContents[3].classList.replace('on-view', 'hidden')
    opinionContents[0].classList.replace('hidden', 'on-view')
    opinionContents[1].classList.replace('hidden', 'on-view')
  }
}

burgerBtn.addEventListener('click', handleNav);
navItems.forEach((el) => {
  el.addEventListener('click', hideMenu);
});

projectButtons.forEach((btn) => { btn.addEventListener('click', changeGallery) });

opinionNextButton.addEventListener('click', nextOpinion)
opinionPrevButton.addEventListener('click', prevOpinion)

const observerCounter = new IntersectionObserver(startCounter, options)

observerCounter.observe(counterContainer)

const observerLogoSlider = new IntersectionObserver(startLogoSlider, options)

observerLogoSlider.observe(logoContainer)
