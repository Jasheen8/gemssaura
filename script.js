// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fade-in effect on scroll
const cards = document.querySelectorAll('.card');
const revealCards = () => {
  const triggerBottom = window.innerHeight * 0.85;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('show');
    }
  });
};
window.addEventListener('scroll', revealCards);
revealCards();

function goTo(page){
  window.location.href = page;
}

/* simple animation */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".card").forEach(el => {
    let pos = el.getBoundingClientRect().top;
    if(pos < window.innerHeight){
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if(window.scrollY > 50){
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});