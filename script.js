function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("show");
}

document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav-menu").classList.remove("show");
  });
});
