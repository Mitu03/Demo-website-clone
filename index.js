const toggleButton = document.getElementById("menu-toogle");
const navLinks = document.getElementById("navbar");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
