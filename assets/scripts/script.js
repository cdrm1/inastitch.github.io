// in a stitch javascript!

// font size adjuster
let currentSize = 1;

document.getElementById("increaseFont").addEventListener("click", () => {
  currentSize += 0.1;
  document.documentElement.style.fontSize = currentSize + "rem";
});

document.getElementById("decreaseFont").addEventListener("click", () => {
  currentSize = Math.max(0.5, currentSize - 0.1);
  document.documentElement.style.fontSize = currentSize + "rem";
});

// font adjuster
document.getElementById("fontSelect").addEventListener("change", (event) => {
  document.body.style.fontFamily = event.target.value;
});

