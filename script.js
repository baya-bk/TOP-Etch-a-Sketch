let isPainting = false;
const container = document.querySelector(".container");
const header = document.querySelector(".header");
let penColor = "#000000";
let cellVal = 16; // Default value

const btn = document.createElement("button");
btn.className = "btn";
btn.textContent = "Add number of cells";
header.appendChild(btn);
btn.addEventListener("click", myFunction);

const resetButton = document.createElement("button");
resetButton.className = "reset";
resetButton.textContent = "Reset";
header.appendChild(resetButton);

resetButton.addEventListener("click", function () {
  const cells = document.querySelectorAll(".cellDiv");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white"; // Reset to the default color
  });
  penColor = "#000000"; // Reset pen color to black
});

const colorPicker = document.querySelector("#favcolor");
colorPicker.addEventListener("input", (e) => {
  penColor = e.target.value;
});
function myFunction() {
  let cellVal = prompt("Enter amount cells you want(must be less than 100): ");
  if (cellVal < 2 || cellVal > 100) {
    alert("Please enter only a number between 2 and 100!");
  } else {
    container.innerHTML = "";
    cellCreator(cellVal);
  }
}

function cellCreator(cellVal) {
  container.style.display = "grid";
  container.style.gridTemplateColumns = `repeat(${cellVal}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${cellVal}, 1fr)`;
  for (let i = 0; i < cellVal * cellVal; i++) {
    const cell = document.createElement("div");
    cell.className = "cellDiv";
    cell.style.border = "0.5px solid rgb(200, 200, 200)";
    // cell.style.backgroundColor = "#ededee"; // Reset to
    cell.addEventListener("mouseover", paint);

    container.appendChild(cell);
  }
}
document.addEventListener("mousedown", () => (isPainting = true));
document.addEventListener("mouseup", () => (isPainting = false));

function paint(e) {
  if (isPainting) {
    e.target.style.backgroundColor = penColor;
  }
}
