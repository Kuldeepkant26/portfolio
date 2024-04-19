let mnubtn = document.querySelector('#mnubtn');
let menu = document.querySelector('.menu');

mnubtn.addEventListener('click', () => {
    menu.classList.toggle('d-none');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 1150) {
        menu.classList.remove('d-none');
    }
    if (window.innerWidth < 1150) {
        menu.classList.add('d-none');
    }
    
});