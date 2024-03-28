
//parallax terra
//let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    //text.style.marginTop = value * 2 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    //hill1.style.top = value * 0.6 + 'px';
   

})

//final parallax  terra

//mobile

let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', ()=> {
    menu.classList.add('abrir-menu');
})

menu.addEventListener('click', ()=> {
    menu.classList.remove('abrir-menu');
})

overlay.addEventListener('click', ()=> {
    menu.classList.remove('abrir-menu');
})


//final mobile


