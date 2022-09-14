let openBtn = document.querySelector(".bi-list");
let closeBtn = document.querySelector(".bi-x-lg");
let menu = document.querySelector(".navbar__menu");

openBtn.addEventListener("click", () => {
  openBtn.classList.toggle("hide");
  closeBtn.classList.toggle("hide");
  menu.classList.toggle("hidden");
});

closeBtn.addEventListener("click", () => {
  openBtn.classList.toggle("hide");
  closeBtn.classList.toggle("hide");
  menu.classList.toggle("hidden");
});

const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  reset: true,
});

sr.reveal(
  ".sectionOne__left , .sectionThree__left, .sectionFour__left, .sectionOne__cards--1, .sectionTwo__left",
  {
    delay: 200,
    origin: "left",
  }
);
sr.reveal(
  ".sectionOne__right, .sectionTree__right, .sectionFour__right, .sectionOne__cards--3, .sectionTwo__right",
  {
    delay: 200,
    origin: "right",
  }
);
sr.reveal(
  ".sectionTwo, .sectionFive, .sectionOne__images, .sectionOne__cards--2, .sectionOne",
  { delay: 200, origin: "bottom" }
);

// sr.reveal(".sectionThree__left", { delay: 200, origin: "left" });
// sr.reveal(".sectionTree__right", { delay: 200, origin: "right" });

// sr.reveal(".sectionFour__left", { delay: 200, origin: "left" });
// sr.reveal(".sectionFour__right", { delay: 200, origin: "right" });

// sr.reveal(".sectionFive", { delay: 200, origin: "bottom" });
