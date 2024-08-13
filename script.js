const black = document;
let isPainting = false;
const container = document.querySelector(".container");
const header = document.querySelector(".header");

const btn = document.createElement("button");
btn.className = "btn";
btn.textContent = "Add number of cells";
header.appendChild(btn);
btn.addEventListener("click", myFunction);

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

    cell.addEventListener("mouseover", paint);

    container.appendChild(cell);
  }
}
document.addEventListener("mousedown", () => (isPainting = true));
document.addEventListener("mouseup", () => (isPainting = false));

function paint(e) {
  if (isPainting) {
    e.target.style.backgroundColor = "black";
  }
}
