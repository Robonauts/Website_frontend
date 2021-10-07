const navslide = () => {
    const burger = document.querySelector('.burger');
    const navlinks = document.querySelector('.navlinks');

    burger.addEventListener('click' , () => {
        navlinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}

navslide();