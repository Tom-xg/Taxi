//Sticky Header / Navbar

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 160);
});

//Menu Icon Change & Open / Close Navbar

let menu = document.querySelector("#menu-icon");
let navlinks = document.querySelector(".navlinks");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlinks.classList.toggle("open");
};

//Remove Navlinks @ Click

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlinks.classList.remove("open");
};

//Scroll Reveal Animation

const animate = ScrollReveal({
  origin: "top",
  distance: "65px",
  duration: "2600",
  delay: "400",
});

animate.reveal(".home-text,.about-img,.feature-left,.social-icons", {
  origin: "left",
});

animate.reveal(".arrow,.about-text,.feature-right", {
  origin: "right",
});

animate.reveal(
  ".home-img,.text-center,.services-content,.feature-middle,.end-text1,.end-text2,.contact-box",
  {
    interval: "150",
  }
);
