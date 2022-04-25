document.querySelector('.menu-btn').addEventListener('click' , ()=>{
    document.querySelector('.nav-items').classList.toggle('show')
});

ScrollReveal().reveal('.logo');
ScrollReveal().reveal('.new-section', { delay: 500});
ScrollReveal().reveal('.nuevo', { delay: 500});
ScrollReveal().reveal('.visto', { delay: 500});
ScrollReveal().reveal('.Popular', { delay: 500});
ScrollReveal().reveal('.most-watched', { delay: 500});
ScrollReveal().reveal('.stars', { delay: 500});
ScrollReveal().reveal('.info', { delay: 500});