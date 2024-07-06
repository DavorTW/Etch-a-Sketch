const gridContainer = document.querySelector(".grid-container");
let numberOfSquares = 32;
const GRID_CONTAINER_WIDTH = 512

for (let i = 0; i < (numberOfSquares*numberOfSquares); i++) { 
    //here can also use a nested loop but i think
    //just multiplying the number by itself is a better approach
    const grid = document.createElement("div");
    grid.setAttribute("class", "grid");
    grid.style.height = `${GRID_CONTAINER_WIDTH / numberOfSquares}px`;
    grid.style.width = `${GRID_CONTAINER_WIDTH / numberOfSquares}px`;
    gridContainer.appendChild(grid);
}