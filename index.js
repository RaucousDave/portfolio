const messages = [
  "Hello, I am Davies Ebisine Enienghan.",
  "I am a frontend developer.",
];
let messageIndex = 0;
let textIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenMessages = 1500;
const typewriterElement = document.querySelector(".typewriter");

let isScrolling = false;
let typingPaused = false;
let timeoutId;

function typeWriter() {
  if (typingPaused) return;
  if (textIndex <= messages[messageIndex].length) {
    typewriterElement.textContent = messages[messageIndex].substring(
      0,
      textIndex
    );
    textIndex++;
    timeoutId = setTimeout(typeWriter, typingSpeed);
  } else {
    timeoutId = setTimeout(eraseText, delayBetweenMessages);
  }
}

function eraseText() {
  if (typingPaused) return; // Stop erasing if paused
  if (textIndex >= 0) {
    typewriterElement.textContent = messages[messageIndex].substring(
      0,
      textIndex
    );
    textIndex--;
    timeoutId = setTimeout(eraseText, erasingSpeed);
  } else {
    messageIndex = (messageIndex + 1) % messages.length;
    timeoutId = setTimeout(typeWriter, typingSpeed);
  }
}

function stopTyping() {
  typingPaused = true;
  clearTimeout(timeoutId); // Stop ongoing typing
}

function resumeTyping() {
  typingPaused = false;
  timeoutId = setTimeout(typeWriter, 500); // Resume after a short delay
}

// Detect scrolling
window.addEventListener("scroll", () => {
  stopTyping();
  clearTimeout(isScrolling);
  isScrolling = setTimeout(resumeTyping, 1000); // Resume after 1 sec of no scrolling
});

typeWriter();

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navlinks");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((nav) => nav.classList.remove("active"));

      this.classList.add("active");
    });
  });
});

const scale_up = document.querySelectorAll(".scale-up");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
  console.log(`Section ${entry.target.id} isIntersecting: ${entry.isIntersecting}`);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // Only stop observing after it's been shown
    }
  }),
    {
      threshold: 0.1,
    };
});

scale_up.forEach((scale) => [observer.observe(scale)]);

const sections = document.querySelectorAll("section"); // Correct selector
const navLinks = document.querySelectorAll(".navlinks"); // Correct selector

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
        console.log(`Observed section: ${entry.target.id}, Intersecting: ${entry.isIntersecting}`)
      if (entry.isIntersecting) {
        navLinks.forEach((navLink) => {
          navLink.classList.remove("active");
          if (navLink.getAttribute("href").substring(1) === entry.target.id) {
            navLink.classList.add("active");
          };

        });
      }
    });
  },
  { threshold: 0.6 } // Correct threshold object
);

sections.forEach((section) => {
  sectionObserver.observe(section);
});

// const sections = document.querySelectorAll("section");

// const sections = document.querySelectorAll("section");
// const navLinks = document.querySelectorAll(".navlinks");
const navbar = document.querySelector("nav"); // Make sure .navbar exists

if (!navbar) {
  console.error("Navbar not found! Make sure it has the correct class.");
} else {
  window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    let navbarHeight = navbar.offsetHeight; // Get navbar height dynamically

    sections.forEach((section) => {
      let sectionTop = section.offsetTop - navbarHeight - 10; // Adjust for navbar
      let sectionHeight = section.offsetHeight;
      let id = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => link.classList.remove("active"));
        let activeLink = document.querySelector(`.navlinks[href="#${id}"]`);

        if (activeLink) {
          activeLink.classList.add("active");
        } else {
          console.warn(`No link found for #${id}`);
        }
      }
    });
  });
}
