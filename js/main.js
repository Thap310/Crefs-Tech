// Declaring variables

const header = document.querySelector("header");
const navBar = document.querySelector("nav");
const navButton = document.querySelector(".mobile-menu-button");
const navMobile = document.querySelector(".mobile-menu");

const headerOptions = {
  rootMargin: "0px 0px 0px 0px"
};

// Add Event Listeners

navButton.addEventListener("click", () => {
  navMobile.classList.toggle("hidden");
});

// Scroll to reveal navbar shadow
const headerObserver = new IntersectionObserver(function(
    entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add("shadow");
        header.classList.remove("lg:pt-10");

      } else {
        header.classList.remove("shadow");
        header.classList.add("lg:pt-10");
      }
    });
  },
  headerOptions);

  headerObserver.observe(header);




