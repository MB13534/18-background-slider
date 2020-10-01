const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0

setBgToBody();

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

leftBtn.addEventListener('click', () => {
    slides[activeSlide].classList.remove('active');
    if (activeSlide === 0) {
        activeSlide += slides.length-1;
    } else {
        activeSlide --;
    }
    setBgToBody();
    slides[activeSlide].classList.add('active');
})

rightBtn.addEventListener('click', () => {
    slides[activeSlide].classList.remove('active');
    if (activeSlide === slides.length-1) {
        activeSlide -= slides.length-1;
    } else {
        activeSlide ++;
    }
    
    setBgToBody();
    slides[activeSlide].classList.add('active');
})

