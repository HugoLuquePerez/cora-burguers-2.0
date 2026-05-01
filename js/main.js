const toggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-links a');
const menuSection = document.getElementById('menu-section');
const openMenuButtons = document.querySelectorAll('.js-open-menu');
const closeMenuButton = document.querySelector('.menu-close');
const slider = document.querySelector('.hero-slider');
const slides = document.querySelectorAll('.hero-slide');
const prevButton = document.querySelector('.slider-control.prev');
const nextButton = document.querySelector('.slider-control.next');
const entrantes = document.querySelector('.entrantes');
const camperos = document.querySelector('.camperos');
const camperosP = document.querySelector('.camperosP');
const burguers = document.querySelector('.burguers');
const burguersP = document.querySelector('.burguersP');
const baguettes = document.querySelector('.baguettes');
const ensaladas = document.querySelector('.ensaladas');
const perritos = document.querySelector('.perritos');
const refrescos = document.querySelector('.refrescos');
const buttonCloseSections = document.querySelectorAll('.menu-close-section');

let currentSlide = 0;

alert("Actualmente estamos trabajando en el desarrollo de la web, por lo que algunas secciones pueden no estar disponibles o mostrar información incompleta. Agradecemos tu comprensión y paciencia mientras seguimos mejorando la experiencia para ti. ¡Gracias por visitarnos!");

function updateSlide() {
  if (!slider) return;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function showNextSlide() {
  if (slides.length === 0) return;
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
}

function showPrevSlide() {
  if (slides.length === 0) return;
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();
}

const reviewSlides = document.querySelectorAll('.review-slide');
let currentReview = 0;

function updateReviewSlide() {
  reviewSlides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentReview);
  });
}

function showNextReview() {
  if (reviewSlides.length === 0) return;
  currentReview = (currentReview + 1) % reviewSlides.length;
  updateReviewSlide();
}

function openMenu() {
  if (!menuSection) return;
  menuSection.classList.add('active');
  document.body.classList.add('no-scroll');
}

function closeMenu() {
  if (!menuSection) return;
  menuSection.classList.remove('active');
  document.body.classList.remove('no-scroll');
}

function toggleMenu() {
  if (!menuSection) return;
  if (menuSection.classList.contains('active')) {
    closeMenu();
  } else {
    openMenu();
  }
}

if (entrantes) {
  entrantes.addEventListener('click', () => {
    const targetSection = document.getElementById('entrantes');

    targetSection.classList.toggle('none');
  });
}
if (camperos) {
  camperos.addEventListener('click', () => {
    const targetSection = document.getElementById('camperos');

    targetSection.classList.toggle('none');
  });
}
if (camperosP) {
  camperosP.addEventListener('click', () => {
    const targetSection = document.getElementById('camperosP');

    targetSection.classList.toggle('none');
  });
}
if (burguers) {
  burguers.addEventListener('click', () => {
    const targetSection = document.getElementById('burguers');

    targetSection.classList.toggle('none');
  });
}
if (burguersP) {
  burguersP.addEventListener('click', () => {
    const targetSection = document.getElementById('burguersP');

    targetSection.classList.toggle('none');
  });
}
if (baguettes) {
  baguettes.addEventListener('click', () => {
    const targetSection = document.getElementById('baguettes');

    targetSection.classList.toggle('none');
  });
}
if (ensaladas) {
  ensaladas.addEventListener('click', () => {
    const targetSection = document.getElementById('ensaladas');

    targetSection.classList.toggle('none');
  });
}
if (perritos) {
  perritos.addEventListener('click', () => {
    const targetSection = document.getElementById('perritos');

    targetSection.classList.toggle('none');
  });
}
if (refrescos) {
  refrescos.addEventListener('click', () => {
    const targetSection = document.getElementById('refrescos');

    targetSection.classList.toggle('none');
  });
}



if (prevButton) {
  prevButton.addEventListener('click', showPrevSlide);
}

if (nextButton) {
  nextButton.addEventListener('click', showNextSlide);
}

if (toggle) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

openMenuButtons.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();
    toggleMenu();
  });
});

if (closeMenuButton) {
  closeMenuButton.addEventListener('click', closeMenu);
}

navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    if (link.classList.contains('js-open-menu')) {
      return;
    }
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
    if (menuSection && menuSection.classList.contains('active')) {
      closeMenu();
    }
  });
});

function rotateHeroWelcomeText() {
  const welcomeText = document.querySelector('.hero-welcome-text');
  if (!welcomeText) return;

  const phrases = [
    'Bienvenidos',
    'Exquisita cocina artesanal',
    'Fusión de sabores únicos',
    'Sabor que conquista paladares',
    'Calidad en cada bocado',
    'Experiencia gastronómica inolvidable',
  ];
  let currentIndex = 0;

  setInterval(() => {
    welcomeText.classList.add('fade');
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % phrases.length;
      welcomeText.textContent = phrases[currentIndex];
      welcomeText.classList.remove('fade');
    }, 400);
  }, 3000);
}

buttonCloseSections.forEach(button => {
  button.addEventListener('click', event => {
    const section = button.closest('.menu-section');
    section.classList.add('none');
  });
});

updateSlide();
rotateHeroWelcomeText();
updateReviewSlide();
setInterval(showNextReview, 4000);