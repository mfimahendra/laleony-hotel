let currency = ['0.0029 &#8383', '670 元', '11500 ¥', '1.499.990 IDR'];
let currentIndex = 0;
let uang = document.querySelector('#currency');

setInterval(() => {
    uang.innerHTML= currency[currentIndex];  
    currentIndex++;
    if (currentIndex === 4)
    currentIndex = 0;
}, 3000)
