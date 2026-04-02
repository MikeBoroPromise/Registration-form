const form = document.querySelector(".form");
const input = document.querySelectorAll(".input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input.value);
});
