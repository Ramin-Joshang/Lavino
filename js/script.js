// Dark mode

const dark = document.querySelector('.dark');
const light = document.querySelector('.light');
const buttons = document.querySelector('.dark-mode').children;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', e => {
        e.preventDefault();
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
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    loop: true,
    spaceBetween: 20,
    centeredSlides: false,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
        },

        380: {
            slidesPerView: 2,
        },

        425: {
            slidesPerView: 2,
        },

        500: {
            slidesPerView: 2,
        },

        576: {
            slidesPerView: 2,
        },

        690: {
            slidesPerView: 2,
        },

        768: {
            slidesPerView: 2,
        },

        1000: {
            slidesPerView: 2,
        },

        1150: {
            slidesPerView: 2,
        },

        1250: {
            slidesPerView: 2,
        },

        1400: {
            slidesPerView: 2,
        },
    },
});
