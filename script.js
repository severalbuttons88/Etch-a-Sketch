let gridSizeStorage = 16;
const container = document.querySelector("#container");
const gridBtn = document.querySelector("#grid-Button");
const clearBtn = document.querySelector("#clear-Grid-Button");
const flexContainer = document.querySelector("#flex-container");
const flexContainerStyle = window.getComputedStyle(flexContainer);
const flexContainerWidth = parseInt(

  flexContainerStyle.getPropertyValue("width")
);
const flexContainerHeight = parseInt(
  flexContainerStyle.getPropertyValue("height")
);

const gridArea = (height, width) => {
  //setups css grid
  let containingWidth = flexContainerWidth / width;
  let containingHeight = flexContainerHeight / height;
  container.style.gridTemplateColumns = `repeat(${width}, ${containingWidth}px`;
  container.style.gridTemplateRows = `repeat(${height}, ${containingHeight}px)`;
};
function createGrid(numberOfGrids) {
  let height = numberOfGrids;
  let width = numberOfGrids;
  gridArea(height, width);
  numberOfGrids *= numberOfGrids;
  let gridArray = []; // convert numberOfGrids to a grid

  for (let i = 0; i < numberOfGrids; i++) {
    gridArray[i] = document.createElement("div");
    gridArray[i].classList.add("grid");
    gridArray[i].classList.add("grid-default-color");
    updateOnHover(gridArray[i]);

    container.appendChild(gridArray[i]);
  }

}
function updateOnHover(gridToUpdate) {
    gridToUpdate.addEventListener('mouseover', function(e) {
        e.target.classList.remove("grid-default-color");
        e.target.classList.add("grid-hover");                  //add hover class to grids

    });
}
function gridUserUpdate() {
    let userInput = prompt("Enter the size of the notepad you want: ", "16");
    userInput = Number(userInput);
    

    console.log(userInput);
    console.log(typeof userInput);
    if (userInput >= 100) {
        userInput = 100;
    } else if (userInput <= 4) {
        userInput = 4;
    } else if (typeof userInput != "number") {
        userInput = prompt("Invalid input, please enter a number, ex (16): ");
        parseInt(userInput);
    }
    gridSizeStorage = userInput;

    createGrid(userInput);
}
function changeGridSizeButton() {
    gridBtn.addEventListener("click", () => {
        clearGrid();
        gridUserUpdate();
    });
}
function gridUserClear(gridCurrentSize) {
    gridCurrentSize = gridSizeStorage;
    clearBtn.addEventListener("click", () => {
        clearGrid();
        createGrid(gridCurrentSize);
        console.log(gridCurrentSize);
    });
}
function startupPage() {
    gridUserUpdate();
    gridUserClear();
    changeGridSizeButton();
    gridUserClear(gridSizeStorage);

}
function clearGrid() {
    container.textContent = "";

}
startupPage();


