let clicked = false;
document.querySelector("#home").addEventListener("click", () => {
  clicked = !clicked;
  console.log(clicked);
  if (clicked) {
    document.querySelector(".left-side").style.cssText = "display:flex;";
  } else {
    document.querySelector(".left-side").style.cssText = "display:none ;";
  }
});