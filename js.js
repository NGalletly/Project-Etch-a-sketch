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

// boxes.classList.add("color");

//DRAWING LOGIC

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

//BUTTONS LOGIC

// <button class="gridInputBtn">Grid Size</button>
// <button class="colorSwapBtn">Colour Swap</button>
// <button class="clearGrid">Clear Grid</button>
// let columns = prompt("How many rows?");

let gridInputBtn = document.querySelector(".gridInputBtn");
let colorSwapBtn = document.querySelector(".colorSwapBtn");
let clearGridBtn = document.querySelector(".clearGridBtn");

gridInputBtn.addEventListener("click", () => {
  console.log("grid input pressed");
  columns = prompt("How many rows?");
  console.log(columns + " button");
  cellCount = Math.pow(columns, 2);
  createGrid(cellCount);
});

colorSwapBtn.addEventListener("click", () => {
  console.log("colour swap pressed");
});

clearGridBtn.addEventListener("click", () => {
  console.log("clear grid pressed");
});

createGrid(cellCount);
