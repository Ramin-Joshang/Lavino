// Dark mode

const dark = document.querySelector('.dark');
const light = document.querySelector('.light');
const buttons = document.querySelector('.dark-mode').children;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', e => {
        for (let j = 0; j < buttons.length; j++) {
            const element = buttons[j];
            element.classList.remove("active");
        }
        buttons[i].classList.add('active');
    })
}

//  Products slider

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {

        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});

// Feedback slider

var swiper = new Swiper(".myFeedback", {
    slidesPerView: "1",
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    }
});