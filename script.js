const nav = document.querySelector('.nav__list');
const navItems = document.querySelectorAll('.nav__item')
const burgerBtn = document.querySelector('.nav__burger-btn')
const counterContainer = document.querySelector('.about__counter')
const logoContainer = document.querySelector('.clients__container')
const clientsLogos = document.querySelectorAll('.clients__logo')
const options = {
  rootMargin: '-25px'
}


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

const logoSlider = ()=>{
clientsLogos.forEach((logo)=>{
  logo.style.transform = "translateX(-80rem)";
})
}

const counter = ()=>{
  let num
  let count
  num = 0
  const counterNum = document.querySelector('.about__counter-number')
  counterNum.textContent = num
  count = setInterval(function(){
    if(num<26){
    num++
    counterNum.textContent = num;}
  },70)
}

const startCounter= entry => {
  if(entry[0].isIntersecting){
    counter()
  }
}
const startLogoSlider = entry => {
  if(entry[0].isIntersecting){
    logoSlider()
  }
}

burgerBtn.addEventListener('click', handleNav);
navItems.forEach((el) => {
  el.addEventListener('click', hideMenu);
});

const observerCounter = new IntersectionObserver(startCounter, options)
observerCounter.observe(counterContainer)

const observerLogoSlider = new IntersectionObserver(startLogoSlider, options)
observerLogoSlider.observe(logoContainer)

