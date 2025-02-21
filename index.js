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
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // Only stop observing after it's been shown
    }
  }),
    {
      threshold: 1,
    };
});

scale_up.forEach((scale) => [observer.observe(scale)]);
