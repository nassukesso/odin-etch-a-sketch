let wrapperDiv = document.createElement("div");

const body = document.querySelector("body");
const script = document.querySelector("script");

wrapperDiv.className = "wrapper";
body.insertBefore(wrapperDiv, script);

for (let i = 0; i < 256; i++) {
  let squareDiv = document.createElement("div");
  squareDiv.className = "square";
  wrapperDiv.appendChild(squareDiv);
}

wrapperDiv.style.gridTemplateColumns = "repeat(16, 1fr)";
wrapperDiv.style.gridAutoRows = "40px";