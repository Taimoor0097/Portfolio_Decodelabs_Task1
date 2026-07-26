document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.style.color = "white";
    if (link.getAttribute("href") === "#" + current) {
      link.style.color = "cyan";
    }
  });
});

const text = "Frontend Developer | BSCS Student";
let index = 0;
const speed = 70;

function typeEffect() {
  if (index < text.length) {
    document.querySelector("header p").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

document.querySelector("header p").innerHTML = "";
typeEffect();

const cards = document.querySelectorAll(".card, .project-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(50px)";
  card.style.transition = "0.5s";
  observer.observe(card);
});