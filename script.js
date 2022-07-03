const burgerBtn = document.querySelector('.nav__burger-btn');
const burgerBars = document.querySelectorAll('.nav__burger-bar');
const mobileMenu = document.querySelector('.nav__list')
const navItems = document.querySelectorAll('.nav__item')
const navLinks = document.querySelectorAll('.nav__link')

const burgerBarsToggle = ()=> {
  burgerBars[1].classList.toggle('nav__burger-bar--hide')
  burgerBars[0].classList.toggle('nav__burger-bar--rotate-first')
  burgerBars[2].classList.toggle('nav__burger-bar--rotate-second')
}

const mobileNavToggle = ()=> {
  burgerBarsToggle();
  mobileMenu.classList.toggle('nav__active');
  navItems.forEach((el)=> {
    el.classList.toggle('nav__active');
  })
  navLinks.forEach((e)=> {
    e.addEventListener('click', function() {
      mobileMenu.classList.remove('nav__active')
      navItems.forEach((el)=> {
        el.classList.remove('nav__active');
      })
    })
  })
}

burgerBtn.addEventListener('click', mobileNavToggle)