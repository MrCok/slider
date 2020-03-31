let slideIndex = 1;
showSlides(slideIndex);
let time = 3000;

/* Слайдер по дотам */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
};

/* Карусель */
function autoSlider() {
    var i;
    let slides = document.getElementsByClassName("item");
    let dots = document.getElementsByClassName("slider-dots_item");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(autoSlider, time);
    };


/* Показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
};

/* Показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1); 
};

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
};
/* Запуск Карусели */
function autoPlay() {
    autoSlider();
};
/* Стоп Карусели */
function autoStop() {
    autoPlay();
    function autoPlay() {
        alert('Я не знаю как отменить функцию autoPlay();');
  }
};

// function autoStop() {
//     autoSlider();
// };


