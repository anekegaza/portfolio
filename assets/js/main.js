/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== SWIPER POPULAR ===============*/

/*=============== ABOUT ACCORDION ===============*/
const accordionItems = document.querySelectorAll(".about-accordion-item");

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".about-accordion-header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".about-accordion-content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

/*=============== ACTIVEPAGE LINK ===============*/
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("nav a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active-link");
  }
});

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scrollup");
  //when the scroll is higher than 350 viewpoert height, add the show-scroll class to the tag 'a' tag with scroll-to-top
  if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*=============== DARK LIGHT THEME ===============*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 500,
  reset: true,
});
sr.reveal(` .hero-text, .testimonial-area, .form`);
sr.reveal(`.about-area, .portfolio-area`, { delay: 500 });
sr.reveal(`.skill-content`, { delay: 600 });
sr.reveal(`.home-value`, { delay: 700 });
sr.reveal(`.hero-btn`, { delay: 500, origin: "bottom" });
sr.reveal(`.card-container-2`, { delay: 500, origin: "bottom" });
sr.reveal(`.about-accordion, input, textarea`, {
  delay: 500,
  origin: "top",
});
sr.reveal(`.logos-img, .hero-img`, { interval: 100 });
sr.reveal(``, {
  origin: "left",
});
sr.reveal(``, { origin: "right" });
sr.reveal(`.card-container , .wwm-area, .portfolio-card, .links`, {
  delay: 500,
  origin: "left",
});

/*=============== ACTIVE TESTIMONIAL PAGE ===============*/
let userTexts = document.getElementsByClassName("user-text");
let userImgs = document.getElementsByClassName("user-img");

function showReview() {
  for (userImg of userImgs) {
    userImg.classList.remove("active-img");
  }
  for (userText of userTexts) {
    userText.classList.remove("active-text");
  }
  let i = Array.from(userImgs).indexOf(event.target);

  userImgs[i].classList.add("active-img");
  userTexts[i].classList.add("active-text");
}
