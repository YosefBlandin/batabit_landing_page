let buttonArrow = document.querySelector('.header__button--arrow')
let button = document.querySelector('.header__button')

buttonUp = () => {
    button.setAttribute('href', '#header')
    buttonArrow.classList.add('header__button--arrow--up');
} 
buttonDown = () => {
    button.setAttribute('href', '#plans')
    buttonArrow.classList.remove('header__button--arrow--up')
}


window.addEventListener('scroll', () => {
    let positionYscreen = document.querySelector('body');
    let positionYscreenGet = positionYscreen.getBoundingClientRect().top;
    positionYscreenGet < -1 ? buttonUp() : buttonDown();
})
