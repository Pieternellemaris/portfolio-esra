document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img");
  const fullPage = document.querySelector("#fullpage");

  images.forEach(img => {
    img.addEventListener("click", () => {
      fullPage.style.backgroundImage = `url(${img.src})`;
      fullPage.classList.add("show");
    });
  });

  fullPage.addEventListener("click", () => {
    fullPage.classList.remove("show");
  });
});
