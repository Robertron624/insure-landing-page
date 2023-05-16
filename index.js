const hamburger = document.querySelector(".hamburger");

const mobileNav = document.querySelector(".mobile-nav");

let isMobileNavOpen = false;


hamburger.addEventListener("click", () => {
    if (!isMobileNavOpen) {
        hamburger.src = "/images/icon-hamburger.svg"
        isMobileNavOpen = true;
    }
    else {
        hamburger.src = "/images/icon-close.svg"
        isMobileNavOpen = false;
    }
    mobileNav.classList.toggle("hidden");
});
