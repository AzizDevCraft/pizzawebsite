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
});

scrollup.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});