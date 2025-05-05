console.log("hello world");

// HTML pointers
let container = document.querySelector(".container");

function createGrid(num) {
  for (let i = 0; i < num; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
  }
}

columns = 16;
let cellCount = Math.pow(columns, 2);
container.style.setProperty("--columns", columns);

//Toggle
let isToggled = false;

//First Grid initializer
createGrid(cellCount);
initGrid();

// Random colour generator
function randomColour() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

function initGrid() {
  let boxes = document.querySelectorAll(".box");

  let mouseDown = false;

  container.addEventListener("mousedown", (event) => {
    mouseDown = true;
    event.target.style.background = isToggled ? randomColour() : "black";
  });

  container.addEventListener("mouseup", (event) => {
    mouseDown = false;
  });

  container.addEventListener("mousemove", (event) => {
    if (mouseDown) {
      event.target.style.background = isToggled ? randomColour() : "black";
    }
  });
}

//BUTTONS Programming

//Clear grid function

function clearGrid() {
  const element = document.querySelector(".container");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

// Button Selectors
let gridInputBtn = document.querySelector(".gridInputBtn");
let colorSwapBtn = document.querySelector(".colorSwapBtn");
let clearGridBtn = document.querySelector(".clearGridBtn");

// Clear grid and input new grid dimensions
gridInputBtn.addEventListener("click", () => {
  clearGrid();
  columns = prompt("How many rows?");
  cellCount = Math.pow(columns, 2);
  container.style.setProperty("--columns", columns);
  createGrid(cellCount);
  initGrid();
  isToggled = false;
});

//Colour Swap button

colorSwapBtn.addEventListener("click", function () {
  isToggled = !isToggled; // Toggle the boolean value
});

//Clear grid button

clearGridBtn.addEventListener("click", () => {
  let boxes = getBoxes();
  boxes.forEach((box) => {
    box.style.background = "azure";
  });

  isToggled = false;
});

function getBoxes() {
  return document.querySelectorAll(".box");
}
