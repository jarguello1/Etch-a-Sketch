const body = document.querySelector('body');
const title = document.createElement('h1');
const sizeButton = document.createElement('button');
const container = document.createElement('div');
const gridSquare = document.createElement('div');
const buttonContainer = document.createElement('div');
const buttons = document.createElement('button');

//create title
title.setAttribute('id', 'title');
title.textContent = 'Etch-a-Sketch';

body.appendChild(title);

//create sizeButton 
sizeButton.setAttribute('id', 'size');
sizeButton.textContent = "Change Number of Boxes";
sizeButton.addEventListener('click', newGrid);
body.appendChild(sizeButton);


//create div container to hold grid
container.setAttribute('id', 'container');
body.appendChild(container);

//create grid div
const grid = document.createElement('div');
grid.setAttribute('id', 'grid');
container.appendChild(grid);

//initialize box with a 16x16 grid
let dimensions = 16;
createBoxes(dimensions);

let currentColor = 'black';

// function to change color of the gridboxes
function changeColor(e) {
    let block = e.target;
    block.style.backgroundColor = currentColor; 
}

//Create boxes in the grid
function createBoxes (dimensions) {
    let boxDimensions = dimensions;
    let size = (800 / boxDimensions) - 2;
    for (let i = 0; i < boxDimensions*boxDimensions; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        gridSquare.setAttribute('style', 'background: white;');
        gridSquare.style.height = `${size}px`
        gridSquare.style.width = `${size}px`
        grid.appendChild(gridSquare);
        gridSquare.addEventListener('mouseover', changeColor);
    }
}

//delete existing boxes
function deleteBoxes() {
    const gridSquare = document.querySelectorAll('.gridSquare');
    gridSquare.forEach(square => {
        square.remove();
    });
}


function clearGrid() {
    const block = document.querySelectorAll('.gridSquare');
    block.forEach(square => {
        square.setAttribute('style', 'background: white;'); 
    });
    resizeBoxes();
}

// changes all the boxes to one color
function fillGrid() {
    const block = document.querySelectorAll('.gridSquare');
    block.forEach(square => {
        square.setAttribute('style', 'background: black;'); 
    });
    resizeBoxes();
}

//Create container for the buttons that toggle different options
buttonContainer.setAttribute('id', 'buttonContainer');
container.appendChild(buttonContainer);

//Create buttons for current options
let buttonText = ['fill', 'clear', 'reset']
buttonText.forEach(function(e) {
    const buttons = document.createElement('button');
    buttons.setAttribute('id', e);
    buttons.textContent = e;
    buttonContainer.appendChild(buttons);
});

//reloads page
const reset = document.getElementById('reset');
reset.textContent = "Reload Page"
reset.addEventListener('click', () => location.reload());

//Clears grid without reloading page
const clear = document.getElementById('clear');
clear.textContent = "Clear";
clear.addEventListener('click', clearGrid);

//changes background color of the entire grid to black when fill button is pressed.
const fill = document.getElementById('fill');
fill.textContent = "Fill";
fill.addEventListener('click', fillGrid)



//prompt user for dimensions they would like
function changeBoxSize() {
    let size = prompt("What size box would you like?\n Up to 100x100.")
    let sizeNumber = parseInt(size);
    if (sizeNumber > 0 && sizeNumber < 101) {
        dimensions = sizeNumber;
    } else {
        alert('Invalid entry, please try again.')
    }
}

//combine changeBoxSize, deleteBoxes, and createBoxes functions into one
function newGrid() {
    changeBoxSize()
    deleteBoxes();
    createBoxes(dimensions);
    resizeBoxes();
}

//last thing change the size of the boxes so that its always n x n dimensions
function resizeBoxes() {
    const gridSquare = document.querySelectorAll('.gridSquare');
    let size = (800 / dimensions) - 2;
    gridSquare.forEach(square => {
        square.style.height = `${size}px`
        square.style.width = `${size}px`
    });
}