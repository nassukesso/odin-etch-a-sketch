let wrapperDiv = document.createElement("div");
const buttonPrompt = document.querySelector("#insert-num-squares");
const container = document.querySelector("#container");
let squareNum;

buttonPrompt.addEventListener("click", () => {
  const regex = /^[0-9]+$/;
  let input = prompt("How many squares per side?");

  while (!input.match(regex)) {
    input = prompt("Number needs to be an integer!");
  }
  squareNum = parseInt(input);
  while (squareNum < 1 || squareNum > 100) {
    squareNum = parseInt(
      prompt("Number needs to be an integer from 1 to 100!")
    );
  }
});

wrapperDiv.className = "wrapper";
container.appendChild(wrapperDiv);

for (let i = 0; i < 256; i++) {
  let squareDiv = document.createElement("div");
  squareDiv.className = "square";
  wrapperDiv.appendChild(squareDiv);
  squareDiv.addEventListener("mouseover", () =>
    squareDiv.classList.add("hover")
  );
  squareDiv.addEventListener("mouseout", () =>
    squareDiv.classList.remove("hover")
  );
}

wrapperDiv.style.gridTemplateColumns = "repeat(16, 1fr)";
wrapperDiv.style.gridAutoRows = "25px";
