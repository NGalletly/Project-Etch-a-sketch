console.log("hello world");

// HTML pointers
let container = document.querySelector(".container");

function createGrid(num) {
  for (let i = 0; i < num; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    // box.textContent = "hi im a box";
    container.appendChild(box);
  }
}

columns = 16;
let cellCount = Math.pow(columns, 2);

container.style.setProperty("--columns", columns);

//First Grid initializer

createGrid(cellCount);

//Etch-a-sketch drawing LOGIC

let boxes = document.querySelectorAll(".box");

let mouseDown = false;

container.addEventListener("mousedown", () => {
  mouseDown = true;
  console.log("mousedown = true");
});

container.addEventListener("mouseup", () => {
  mouseDown = false;
  console.log("mouseup = false");
});

boxes.forEach((box) => {
  box.addEventListener("mousedown", () => {
    box.style.background = "black";
  });
});

boxes.forEach((box) => {
  box.addEventListener("mousemove", () => {
    if (mouseDown === true) {
      box.style.background = "black";
    }
  });
});
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

// Clear gris and input new grid dimensions
gridInputBtn.addEventListener("click", () => {
  clearGrid();
  console.log("grid click");
  columns = prompt("How many rows?");
  cellCount = Math.pow(columns, 2);
  container.style.setProperty("--columns", columns);
  createGrid(cellCount);
});

colorSwapBtn.addEventListener("click", () => {
  console.log("colour swap pressed");
});

// Clear grid button

boxes.forEach((box) => {
  clearGridBtn.addEventListener("click", () => {
    box.style.background = "azure";
  });
});
