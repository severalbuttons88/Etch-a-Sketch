const container = document.querySelector('#container');
const flexContainer = document.querySelector('#flex-container');
const flexContainerStyle = window.getComputedStyle(flexContainer);
const flexContainerWidth = parseInt(flexContainerStyle.getPropertyValue('width'));
const flexContainerHeight = parseInt(flexContainerStyle.getPropertyValue('height'));

const gridArea = (height, width) => {   //setups css grid
    let containingWidth = (flexContainerWidth / width);
    let containingHeight = (flexContainerHeight / height);
    container.style.gridTemplateColumns = `repeat(${width}, ${containingWidth}px`;
    container.style.gridTemplateRows = `repeat(${height}, ${containingHeight}px)`;
}
function createGrid(numberOfGrids) {

let height = numberOfGrids;
let width = numberOfGrids;
gridArea(height, width);
  numberOfGrids *= numberOfGrids;
  let gridArray = []; // convert numberOfGrids to a grid
  for (var i = 0; i < numberOfGrids; i++) {
    gridArray[i] = document.createElement("div");
    gridArray[i].classList.add("grid");
    container.appendChild(gridArray[i]);
  }
  
}
createGrid(16);
