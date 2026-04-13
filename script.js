// Navbar Toggle for Mobile
function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("show");
}

// Close menu on link click
document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav-menu").classList.remove("show");
  });
});

// Add shadow to navbar on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
    navbar.style.background = 'rgba(6, 9, 19, 0.95)';
  } else {
    navbar.style.boxShadow = 'none';
    navbar.style.background = 'rgba(6, 9, 19, 0.7)';
  }
});

// Scroll Reveal Animations (fixed)
function setupScrollReveal() {
  const revealElements = document.querySelectorAll('.glass-panel, .section-header');

  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  };

  const revealOptions = {
    threshold: 0.05,
    rootMargin: "0px 0px -30px 0px"
  };

  const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

  revealElements.forEach(el => {
    el.classList.add('reveal-pending');
    revealObserver.observe(el);
  });
}

// Run after page is fully loaded
window.addEventListener('load', () => {
  setupScrollReveal();
});
