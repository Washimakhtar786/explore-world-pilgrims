// Simple hero text animation
document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector(".hero-content h1");
  heroText.style.opacity = 0;
  heroText.style.transition = "opacity 2s ease-in-out";
  setTimeout(() => {
    heroText.style.opacity = 1;
  }, 500);
});
