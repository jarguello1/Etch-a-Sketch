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

// function to change color of the gridboxes
function changeColorBlack(e) {
    let block = e.target;
    block.setAttribute('style', 'background: black;'); 
}

//Create boxes in the grid
function createBoxes (dimensions) {
    let boxDimensions = dimensions;
    for (let i = 0; i < boxDimensions*boxDimensions; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        gridSquare.setAttribute('style', 'background: white;'); 
        grid.appendChild(gridSquare);
        gridSquare.addEventListener('mouseover', changeColorBlack)
    }
}

//delete existing boxes
function deleteBoxes() {
    const gridSquare = document.querySelectorAll('.gridSquare');
    gridSquare.forEach(square => {
        square.remove();
    });
}

//initialize box with a 16x16 grid
let dimensions = 16;
createBoxes(dimensions);

function clearGrid() {
    const block = document.querySelectorAll('.gridSquare');
    block.forEach(square => {
        square.setAttribute('style', 'background: white;'); 
    });
}

// changes all the boxes to one color
function fillGrid() {
    const block = document.querySelectorAll('.gridSquare');
    block.forEach(square => {
        square.setAttribute('style', 'background: black;'); 
    });
}

//Create container for the buttons that toggle different options
buttonContainer.setAttribute('id', 'buttonContainer');
container.appendChild(buttonContainer);

//Create buttons for current options
let buttonText = ['Fill', 'Clear', 'Reset']
buttonText.forEach(function(e) {
    const buttons = document.createElement('button');
    buttons.setAttribute('id', e);
    buttons.textContent = e;
    buttonContainer.appendChild(buttons);
});

//reloads page
const reset = document.getElementById('Reset');
reset.addEventListener('click', () => location.reload());

const clear = document.getElementById('Clear');
clear.addEventListener('click', clearGrid);

//changes background color of the entire grid to black when fill button is pressed.
const fill = document.getElementById('Fill');
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
}