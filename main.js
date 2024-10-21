document.addEventListener("DOMContentLoaded", () => {
    // Scroll up button behavior
    const scrollup = document.querySelector(".scrollup");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            scrollup.classList.add("active");
        } else {
            scrollup.classList.remove("active");
        }
    });

    scrollup.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});

// Swiper for Instagram Posts
const instaSwiper = new Swiper('.instaSwiper', {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.insta-next',
        prevEl: '.insta-prev',
    },
    pagination: {
        el: '.insta-pagination',
        clickable: true,
    },
    autoplay: false,
});

// Swiper for mobile menu
const menuSwiperMobile = new Swiper('.menuSwiperMobile', {
    speed: 800,
    loop: false,
    slidesPerView: 1,
    pagination: {
        el: '.menu-pagination-mobile',
        clickable: true,
    },
    autoplay: false,
});

// Swiper for desktop menu
const menuSwiperDesktop = new Swiper('.menuSwiperDesktop', {
    speed: 800,
    loop: false,
    slidesPerView: 1,
    navigation: {
        nextEl: '.menu-next-desktop',
        prevEl: '.menu-prev-desktop',
    },
    pagination: {
        el: '.menu-pagination-desktop',
        clickable: true,
    },
    autoplay: false,
});


