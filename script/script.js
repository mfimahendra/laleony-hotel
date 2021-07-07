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


//price

function bPrice() {
    const roomImage = document.querySelector("#bRoomImage").src = "../img/main-building.png";
    const type = document.querySelector("#b-rooms").value;
    switch (type) {
        case 'Deluxe':            
            document.querySelector("#showHarga").value = "300元";
            document.querySelector("#bRoomImage").src = "../img/deluxe-room.jpg";
            break;
        case 'Deluxe Sea View':            
            document.querySelector("#showHarga").value = "400元";
            document.querySelector("#bRoomImage").src = "../img/deluxe-seave.jpg";
            break;
        case 'Executive Suite':            
            document.querySelector("#showHarga").value = "700元";
            document.querySelector("#bRoomImage").src = "../img/executive-suite.jpg";
            break;
        case 'Grand Suite':            
            document.querySelector("#showHarga").value = "1000元";
            document.querySelector("#bRoomImage").src = "../img/grand-suite.jpg";
            break;
        case 'Grand Deluxe':            
            document.querySelector("#showHarga").value = "800元";
            document.querySelector("#bRoomImage").src = "../img/grand-deluxe.jpg";
            break;
        case 'Grand Deluxe Sea View':            
            document.querySelector("#showHarga").value = "1500元";
            document.querySelector("#bRoomImage").src = "../img/grand-deluxe-seav.jpg";
            break;

        default:
            document.querySelector("#showHarga").value = "0元";
            break;
        }
}

function submitt() { 
    var fN = document.getElementById("fName").value;
    var lN = document.getElementById("lName").value;
    var bRm = document.getElementById("b-rooms").value;
    var cinDate = document.getElementById("check-in").value;
    var hargakamar = document.getElementById("showHarga").value;

    if (confirm("Hello Mr/Mrs " + fN + " "+ lN + " You will book a room on " + cinDate + " , " + bRm  + " room type for : " + hargakamar)) {
        alert("Successfully Book a Room");
    }
    else {
        alert("Aborted");
    }
    
}

//booking offers
function bookOffers(offer) {
    switch (offer) {
        case 'wedding':
            if (confirm("Book a Wedding package? for 5000元")) {
                alert("You book a Wedding Package, for further information call +62 123 4567 8910");
            }
            break;

        case 'honeymoon':
            if (confirm("Book a Honeymoon package? for 3500元")) {
                alert("You book a Honeymoon Package, for further information call +62 123 4567 8910");
            }
            break;

        case 'pool':
            if (confirm("Book a Pool & Bars package? for 4000元")) {
                alert("You book a Pool & Bars Package, for further information call +62 123 4567 8910");
            }
            break;
    
        case 'holiday':
            if (confirm("Book a Holiday package? for 2500元")) {
                alert("You book a Holiday Package, for further information call +62 123 4567 8910");
            }
            break;

        case 'roomHalf':
            if (confirm("Book a Room package for half price?")) {
                alert("You book a Room Package, for further information call +62 123 4567 8910");
            }
            break;
    
        default:
            break;
    }
}