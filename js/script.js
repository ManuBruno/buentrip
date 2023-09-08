window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("cambio-color", window.scrollY > 0);

});
