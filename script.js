const container = document.querySelector(".container");

let cellVal = prompt("Enter amount cells you want(must be less than 100): ");

function cellCreator(cellVal) {
  container.style.display = "grid";
  container.style.gridTemplateColumns = `repeat(${cellVal}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${cellVal}, 1fr)`;
  for (let i = 0; i < cellVal * cellVal; i++) {
    const square = document.createElement("div");
    square.className = "square";
    square.style.border = "0.5px solid rgb(200, 200, 200)";
    container.appendChild(square);
  }
}
cellCreator(cellVal);
