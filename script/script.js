function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    menuToggle.classList.toggle('active');
}

function toggleMenuActive(ae) {
    var room = document.querySelector('.offer-room');
    var bars = document.querySelector('.offer-bar');
    var meet = document.querySelector('.offer-meet');
    switch (ae) {
        case 'room':            
            room.classList.toggle('active');
            bars.classList.remove('active');
            meet.classList.remove('active');
            break;
        case 'bars':            
            bars.classList.toggle('active');
            room.classList.remove('active');
            meet.classList.remove('active');
            break;
        case 'meet':            
            meet.classList.toggle('active');
            room.classList.remove('active');
            bars.classList.remove('active');
            break;
    
        default:
            break;
    }
}

function copas() {
    var copyText = document.querySelector('#referral');
    var tooltip = document.querySelector('#myTooltip');
    copyText.select();
    copyText.setSelectionRange(0,9999);
    document.execCommand("copy");
    tooltip.innerHTML = "Copied : " + copyText.value;
}


function scrollNav() {
    const body = document.body; 
    const html = document.documentElement;
    var naver = document.getElementById("navbar");

    if (body.scrollTop > 50 || html.scrollTop > 50) {
        naver.classList.add('solid');
    } else {
        naver.classList.remove('solid');
    }
}

// carousel
var slideIndex = 0;
var timer = null;

// next
function plusSlides(n) {
    clearTimeout(timer);
    showSlides(slideIndex += n);
  }

function currentSlide(n){
    clearTimeout(timer);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("bg-slide");
    var dots = document.getElementsByClassName("dot");
    if (n==undefined){n = ++slideIndex}
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        timer = setTimeout(showSlides, 10000);
}


//currency auto
let currency = ['0.0029 &#8383', '670 元', '11500 ¥', '1.499.990 IDR'];
let currentIndex = 0;
let uang = document.querySelector('#currency');

setInterval(() => {
    uang.innerHTML= currency[currentIndex];  
    currentIndex++;
    if (currentIndex === 4)
    currentIndex = 0;
}, 3000)