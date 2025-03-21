const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (event) => {
  movecursor(event.pageX, event.pageY);
  console.log(event.pageX);
});

const movecursor = function (pageX, pageY) {
  cursor.style.left = pageX + "px";
  cursor.style.top = pageY + "px";
};
