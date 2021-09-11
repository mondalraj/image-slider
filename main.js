const image1 = document.querySelector('.image-1');
const image2 = document.querySelector('.image-2');
const image3 = document.querySelector('.image-3');
const image4 = document.querySelector('.image-4');
const image5 = document.querySelector('.image-5');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const circle1 = document.querySelector('.circle-1');
const circle2 = document.querySelector('.circle-2');
const circle3 = document.querySelector('.circle-3');
const circle4 = document.querySelector('.circle-4');
const circle5 = document.querySelector('.circle-5');

const time = 3000;
let counter = 2;

circle1.addEventListener('click', () => {
    counter = 1;
    changeImage();
})
circle2.addEventListener('click', () => {
    counter = 2;
    changeImage();
})
circle3.addEventListener('click', () => {
    counter = 3;
    changeImage();
})
circle4.addEventListener('click', () => {
    counter = 4;
    changeImage();
})
circle5.addEventListener('click', () => {
    counter = 5;
    changeImage();
})

nextBtn.addEventListener('click', () => {
    changeImage();
})
prevBtn.addEventListener('click', () => {
    counter = 1 ? counter = 5 : counter--;
    changeImage();
})


function changeImage() {
    if (counter == 1) {
        image1.classList.add('activeImage');
        image2.classList.remove('activeImage');
        image3.classList.remove('activeImage');
        image4.classList.remove('activeImage');
        image5.classList.remove('activeImage');
        circle1.classList.add('activeCircle');
        circle2.classList.remove('activeCircle');
        circle3.classList.remove('activeCircle');
        circle4.classList.remove('activeCircle');
        circle5.classList.remove('activeCircle');
        counter = 2;
    } else if (counter == 2) {
        image2.classList.add('activeImage');
        image1.classList.remove('activeImage');
        image3.classList.remove('activeImage');
        image4.classList.remove('activeImage');
        image5.classList.remove('activeImage');
        circle2.classList.add('activeCircle');
        circle1.classList.remove('activeCircle');
        circle3.classList.remove('activeCircle');
        circle4.classList.remove('activeCircle');
        circle5.classList.remove('activeCircle');
        counter = 3;
    } else if (counter == 3) {
        image3.classList.add('activeImage');
        image1.classList.remove('activeImage');
        image2.classList.remove('activeImage');
        image4.classList.remove('activeImage');
        image5.classList.remove('activeImage');
        circle3.classList.add('activeCircle');
        circle2.classList.remove('activeCircle');
        circle1.classList.remove('activeCircle');
        circle4.classList.remove('activeCircle');
        circle5.classList.remove('activeCircle');
        counter = 4;
    } else if (counter == 4) {
        image4.classList.add('activeImage');
        image1.classList.remove('activeImage');
        image2.classList.remove('activeImage');
        image3.classList.remove('activeImage');
        image5.classList.remove('activeImage');
        circle4.classList.add('activeCircle');
        circle2.classList.remove('activeCircle');
        circle3.classList.remove('activeCircle');
        circle1.classList.remove('activeCircle');
        circle5.classList.remove('activeCircle');
        counter = 5;
    } else if (counter == 5) {
        image5.classList.add('activeImage');
        image1.classList.remove('activeImage');
        image2.classList.remove('activeImage');
        image4.classList.remove('activeImage');
        image3.classList.remove('activeImage');
        circle5.classList.add('activeCircle');
        circle2.classList.remove('activeCircle');
        circle3.classList.remove('activeCircle');
        circle4.classList.remove('activeCircle');
        circle1.classList.remove('activeCircle');
        counter = 1;
    }
}



setInterval("changeImage()", time);