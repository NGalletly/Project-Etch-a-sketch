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

//Toggle
let isToggled = false;

//First Grid initializer
createGrid(cellCount);
initGrid();

function initGrid() {
  let boxes = document.querySelectorAll(".box");

  let mouseDown = false;

  container.addEventListener("mousedown", (event) => {
    mouseDown = true;
    event.target.style.background = isToggled ? "red" : "black";
  });

  container.addEventListener("mouseup", (event) => {
    mouseDown = false;
  });

  container.addEventListener("mousemove", (event) => {
    if (mouseDown) {
      event.target.style.background = isToggled ? "red" : "black";
    }
  });

  // boxes.forEach((box) => {
  //   box.addEventListener("mousedown", () => {
  //     box.style.background = isToggled ? "red" : "black";
  //   });
  // });

  // boxes.forEach((box) => {
  //   box.addEventListener("mousemove", () => {
  //     if (mouseDown === true) {
  //       box.style.background = isToggled ? "red" : "black";
  //     }
  //   });
  // });
}

//Etch-a-sketch drawing LOGIC

// let boxes = document.querySelectorAll(".box");

// Etch-a sketch logic end

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
  columns = prompt("How many rows?");
  cellCount = Math.pow(columns, 2);
  container.style.setProperty("--columns", columns);
  createGrid(cellCount);
  initGrid();
  isToggled = false;

  // let boxes = document.querySelectorAll(".box");

  // let mouseDown = false;

  // container.addEventListener("mousedown", () => {
  //   mouseDown = true;
  // });

  // container.addEventListener("mouseup", () => {
  //   mouseDown = false;
  // });

  // boxes.forEach((box) => {
  //   box.addEventListener("mousedown", () => {
  //     box.style.background = "black";
  //   });
  // });

  // boxes.forEach((box) => {
  //   box.addEventListener("mousemove", () => {
  //     if (mouseDown === true) {
  //       box.style.background = "black";
  //     }
  //   });
  // });
  // Etch logic end
});

//Colour Swap button

colorSwapBtn.addEventListener("click", function () {
  isToggled = !isToggled; // Toggle the boolean value
});
//   if (isToggled) {
//     console.log("Toggled On");
//     let mouseDown = false;

//     container.addEventListener("mousedown", () => {
//       mouseDown = true;
//     });

//     container.addEventListener("mouseup", () => {
//       mouseDown = false;
//     });

//     boxes.forEach((box) => {
//       box.addEventListener("mousedown", () => {
//         box.style.background = "red";
//       });
//     });

//     boxes.forEach((box) => {
//       box.addEventListener("mousemove", () => {
//         if (mouseDown === true) {
//           box.style.background = "red";
//         }
//       });
//     });
//   } else {
//     console.log("Toggled Off");
//     let mouseDown = false;

//     container.addEventListener("mousedown", () => {
//       mouseDown = true;
//     });

//     container.addEventListener("mouseup", () => {
//       mouseDown = false;
//     });

//     boxes.forEach((box) => {
//       box.addEventListener("mousedown", () => {
//         box.style.background = "black";
//       });
//     });

//     boxes.forEach((box) => {
//       box.addEventListener("mousemove", () => {
//         if (mouseDown === true) {
//           box.style.background = "black";
//         }
//       });
//     });
//   }
// });

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

// clearGridBtn.addEventListener("click", () => {
//   clearGrid();
//   console.log(columns, cellCount);
//   createGrid(cellCount);

//   let boxes = document.querySelectorAll(".box");

//   if (isToggled) {
//     console.log("Toggled On");
//     let mouseDown = false;

//     container.addEventListener("mousedown", () => {
//       mouseDown = true;
//     });

//     container.addEventListener("mouseup", () => {
//       mouseDown = false;
//     });

//     boxes.forEach((box) => {
//       box.addEventListener("mousedown", () => {
//         box.style.background = "red";
//       });
//     });

//     boxes.forEach((box) => {
//       box.addEventListener("mousemove", () => {
//         if (mouseDown === true) {
//           box.style.background = "red";
//         }
//       });
//     });
//   } else {
//     console.log("Toggled Off");
//     let mouseDown = false;

//     container.addEventListener("mousedown", () => {
//       mouseDown = true;
//     });

//     container.addEventListener("mouseup", () => {
//       mouseDown = false;
//     });

//     boxes.forEach((box) => {
//       box.addEventListener("mousedown", () => {
//         box.style.background = "black";
//       });
//     });

//     boxes.forEach((box) => {
//       box.addEventListener("mousemove", () => {
//         if (mouseDown === true) {
//           box.style.background = "black";
//         }
//       });
//     });
//   }
// });
