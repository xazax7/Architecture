const prevImgBtn = document.getElementById("prevImgBtn");
const nextImgBtn = document.getElementById("nextImgBtn");
const currSlide = document.getElementById("currentSlideNumber");
const totalSlide = document.getElementById("totalSlidesNumber");
const introData = [
    {
        img: `./images/x1.jpg`,
        h1: `Lorem Ipsum 1`,
        p:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    },
    {
        img: `./images/x2.jpg`,
        h1: `Lorem Ipsum 2`,
        p:
            "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."
    },
    {
        img: `./images/x3.png`,
        h1: "Lorem Ipsum 3",
        p: "Duis aute irure dolor in reprehenderit in voluptate velit."
    }
];
totalSlide.textContent = `/ 0${introData.length}`;
prevImgBtn.addEventListener("click", function () {
    plusSlides(-1);
});
nextImgBtn.addEventListener("click", function () {
    plusSlides(1);
});

var slideIndex = 1;

function plusSlides(n) {
    showSlides((slideIndex += n));
}
showSlides();
function showSlides(n) {

    var i;
    if (n > introData.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = introData.length;
    }

    //Weak attempt to pre-load
    document.getElementById("placeholder").style.background = `url("${introData[slideIndex - 1].img}")`;

    var bg = document.getElementById("intro-bg");
    bg.style.animation = "fadeOut 0.35s ease-in";
    setTimeout(function () {
        h1Text.textContent = introData[slideIndex - 1].h1;
        pText.textContent = introData[slideIndex - 1].p;
        bg.style.background = `url("${introData[slideIndex - 1].img}")`;
        currSlide.textContent = (slideIndex);
        bg.style.backgroundSize = "cover";
        bg.style.backgroundPosition = "center";
        bg.style.animation = "fade 1.3s ease-out";
    }, 350);

    console.log(slideIndex + bg.classList);
}

var mobileMenuIcon = document.getElementById("mobile-menu-icon");
window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 100) {
        console.log("Window scroll is at the top");

        mobileMenuIcon.style.display = "block";
    } else {
        mobileMenuIcon.style.display = "none";
    }
})
mobileMenuIcon.addEventListener("click", function () {
    var x = document.getElementById("mobile-menu-list");
    if (x.style.display === "block") {
        x.style.display = "none";

        mobileMenuIcon.classList.remove("open");
    } else {
        x.style.display = "block";

        mobileMenuIcon.classList.add("open");

    }
})