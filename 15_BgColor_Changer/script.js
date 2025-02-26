let btn = document.querySelector(".btn");
let hex = document.querySelector(".hexCode");

function color() {
  let char = "0123456789ABCDEF";
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += char[Math.floor(Math.random() * 16)];
  }
  return hexColor;
}

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = color();
  hex.innerHTML = color();
});
