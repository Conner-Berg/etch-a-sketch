const grid = document.querySelector(".grid");

function makeGrid(gridSize) {
	grid.style.gridTemplateColumns = `repeat(${gridSize} , 1fr)`;
	grid.style.gridTemplateRows = `repeat(${gridSize} , 1fr)`;
	for (i = 0; i < gridSize * gridSize; i++) {
		const div = document.createElement("div");
		div.classList.add("grid-item");
		grid.appendChild(div);
	}
}

function colorOnHover() {
	const gridItem = document.querySelectorAll(".grid-item");
	gridItem.forEach((item) =>
		item.addEventListener("mouseover", (event) => {
			event.target.classList.add("grid-item-colored");
		})
	);
}

makeGrid(16);
colorOnHover();
