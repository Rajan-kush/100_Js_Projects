const blankHeart = document.querySelector(".blank-heart");
const redHeart = document.querySelector(".red-heart");

blankHeart.addEventListener("click", () => {
  redHeart.classList.add("animation");
  blankHeart.classList.add("fill-color");
});

redHeart.addEventListener("click", () => {
  redHeart.classList.remove("animation");
  blankHeart.classList.remove("fill-color");
});
