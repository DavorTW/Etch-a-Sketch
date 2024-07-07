const GRID_CONTAINER_WIDTH = 512;
let numberOfSquares = 16;
let mouseIsDown = false;

const gridContainer = document.querySelector(".grid-container");

function createGrid(numberOfSquares){
    for (let i = 0; i < (numberOfSquares*numberOfSquares); i++) { 
        //here can also use a nested loop but i think
        //just multiplying the number by itself is a better approach

        const grid = document.createElement("div");
        grid.setAttribute("class", "grid");
        grid.style.height = `${(GRID_CONTAINER_WIDTH / numberOfSquares)}px`;
        grid.style.width = `${(GRID_CONTAINER_WIDTH / numberOfSquares)}px`;

        gridContainer.appendChild(grid);
    }
    drawSquares()
}

createGrid(numberOfSquares);

function drawSquares(){
    const grids = document.querySelectorAll(".grid");
    grids.forEach( grid => {
        grid.addEventListener("mousedown", () =>{mouseIsDown=true});
        grid.addEventListener("mouseup", () => {mouseIsDown=false});
        grid.addEventListener("mousemove", ()=> {
            if(mouseIsDown){
                grid.style.backgroundColor = "black";
            }
        })
    })
}

const sliderContainer = document.querySelector(".slider-container");

const slider = document.querySelector("input");

const sliderValue = document.createElement("p");
sliderValue.textContent = `${slider.value} x ${slider.value}`;

sliderContainer.appendChild(sliderValue);

slider.addEventListener("input", (event) => {
    sliderValue.textContent = `${event.target.value} x ${event.target.value}`;
    numberOfSquares = event.target.value;
});

slider.addEventListener("mouseup", () => {
    gridContainer.textContent = '';
    createGrid(numberOfSquares);
});
