function scrollAppear(){
    var scrolleffect = document.querySelector('.main-product-detail');
    var intro = scrolleffect.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.1;

    if(intro < screenPosition) {
        scrolleffect.classList.add('intro')
    }
}

window.addEventListener('scroll', scrollAppear);