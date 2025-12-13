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
function myFunction(x) {
  x.classList.toggle("change");
  const btn = document.getElementById("hiddenDrop");

  var btnDisplay = window.getComputedStyle(btn).getPropertyValue("display"); 
  if (x.classList.contains("change")) {
console.log('hi');
    btn.style.display="block"
  } else {
        btn.style.display="none"
    console.log('no')
  }
}