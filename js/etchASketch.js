let wrapperDiv = document.createElement("div");
const buttonPrompt = document.querySelector("#insert-num-squares");
const container = document.querySelector("#container");
let squareNum = 16;
let squareNumSquared = squareNum * squareNum;

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

  squareNumSquared = squareNum * squareNum;
  container.removeChild(wrapperDiv);
  wrapperDiv = document.createElement("div");
  wrapperDiv.className = "wrapper";
  container.appendChild(wrapperDiv);
  wrapperDiv.style.gridTemplateColumns = `repeat(${squareNum}, 1fr)`;
  wrapperDiv.style.gridAutoRows = `${400 / squareNum}`;

  for (let i = 0; i < squareNumSquared; i++) {
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
});

wrapperDiv.className = "wrapper";
container.appendChild(wrapperDiv);
wrapperDiv.style.gridTemplateColumns = `repeat(${squareNum}, 1fr)`;
wrapperDiv.style.gridAutoRows = `${Math.floor(400 / squareNum)}`;

for (let i = 0; i < squareNumSquared; i++) {
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
