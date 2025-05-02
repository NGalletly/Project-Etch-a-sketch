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

let columns = prompt("How many rows?");
let cellCount = Math.pow(columns, 2);
console.log(cellCount);
console.log(columns);

container.style.setProperty("--columns", columns);

createGrid(cellCount);
