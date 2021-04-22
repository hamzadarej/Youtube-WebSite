let clicked = false;
document.querySelector(".home").addEventListener("click", () => {
  clicked = !clicked;
  console.log(clicked);
  if (clicked) {
    document.querySelector(".left-side").style.cssText = "display:flex;";
  } else {
    document.querySelector(".left-side").style.cssText = "display:none ;"
    
  }
});
const theme = () => {
  const white =document.querySelector(".white-theme").checked;
  body = document.querySelector("body").style;
  console.log(white);
  if(white) {
    body.backgroundColor = "black";

  }else {
    body.backgroundColor="white";
  }
}
