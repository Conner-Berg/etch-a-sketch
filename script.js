function makeGrid(rows, cols) {
	const container = document.getElementById("container");
	container.style.setProperty("--grid-rows", rows);
	container.style.setProperty("--grid-cols", cols);
	for (c = 0; c < rows * cols; c++) {
		let cell = document.createElement("div");
		container.appendChild(cell).className = "grid-item";
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

makeGrid(16, 16);
colorOnHover();
