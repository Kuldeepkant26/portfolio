let el = document.querySelector('.navbar');
let btn = document.querySelector('button');

btn.addEventListener('click', () => {
    el.classList.toggle('bgc');
})