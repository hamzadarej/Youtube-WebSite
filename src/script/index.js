let clicked = false;
document.querySelector("#home").addEventListener("click", () => {
  clicked = !clicked;

  if (clicked) {
    document.querySelector(".left-side").style.cssText = "display:flex;";
  } else {
    document.querySelector(".left-side").style.cssText = "display:none ;";
  }
});
let click = true;
document.querySelector("#user-pic").addEventListener("click", () => {
  if (click) {
    document.querySelector(".change-color").style.cssText = "display:block;";
  } else {
    document.querySelector(".change-color").style.cssText = "display:none;";
  }
});
const theme = () => {
  const white = document.querySelector(".white-theme").checked;
  let body = document.querySelector("body").style;
  let left = document.querySelector(".left-side").style;
  let nav = document.querySelector(".topnav").style;
  let container = document.querySelectorAll(".main-container").style;
  let navMain = document.querySelector(".nav-main").style;
  let proFil = document.querySelector(".proFil").style;
  let modesColor = document.querySelector(".change-color").style;

  
  if (white==false) {
    body.backgroundColor = "black";
  } else {
    modesColor.backgroundColor = "white";
    body.backgroundColor = "white";
    left.backgroundColor = "transparent";
    nav.backgroundColor = "transparent";
    navMain.backgroundColor = "transparent";
    proFil.backgroundColor = "transparent";
    container.backgroundColor = "transparent";
  }
};
theme()