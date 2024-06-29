let mnubtn = document.querySelector('#mnubtn');
let menu = document.querySelector('.menu');

mnubtn.addEventListener('click', () => {
    menu.classList.toggle('d-none');
});

if (window.innerWidth < 1150) {
    menu.classList.add('d-none');
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 1150) {
        menu.classList.remove('d-none');
        
    }
    if (window.innerWidth < 1150) {
        menu.classList.add('d-none');
    }

});

if (window.innerWidth < 1150) {
    let menuitems = document.querySelectorAll('.menuitem');    // To close menu bar after redirecting to Any section  for smaller devices only
    for (menuitem of menuitems) {
        menuitem.addEventListener('click', () => {
            menu.classList.add('d-none');
        })
    }
}

