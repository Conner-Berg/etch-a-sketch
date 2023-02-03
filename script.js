const grid = document.querySelector(".grid");
const userGridBtn = document.querySelector(".user-grid-btn");

function makeGrid(gridSize) {
	grid.style.gridTemplateColumns = `repeat(${gridSize} , 1fr)`;
	grid.style.gridTemplateRows = `repeat(${gridSize} , 1fr)`;
	for (i = 0; i < gridSize * gridSize; i++) {
		const div = document.createElement("div");
		div.classList.add("grid-item");
		grid.appendChild(div);
	}
	colorOnHover();
}

function colorOnHover() {
	const gridItem = document.querySelectorAll(".grid-item");
	gridItem.forEach((item) =>
		item.addEventListener("mouseover", (event) => {
			event.target.classList.add("grid-item-colored");
		})
	);
}

userGridBtn.addEventListener("click", () => {
	let gridSize = prompt("Enter a new grid size: ");
	while (gridSize > 100 || gridSize < 1) {
		gridSize = prompt(
			"Whoops, the grid size needs to be a positive number of 100 or less.\nEnter a new grid size: "
		);
	}
	let gridSizeInt = parseInt(gridSize);
	grid.textContent = "";
	makeGrid(gridSizeInt);
});

makeGrid(16);
