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



//create div container to hold grid
container.setAttribute('id', 'container');

body.appendChild(container);

//create grid div
const grid = document.createElement('div');
grid.setAttribute('id', 'grid');

container.appendChild(grid);

function changeColorBlack(e) {
    let block = e.target;
    block.setAttribute('style', 'background: black;'); 
}

function changeColorWhite(e) {
    let block = e.target;
    block.setAttribute('style', 'background: black;'); 
}

let boxDimensions = 16;

//Create boxes in the grid
for (let i = 0; i < boxDimensions*boxDimensions; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('gridSquare');
    grid.appendChild(gridSquare);
    gridSquare.addEventListener('mouseover', changeColorBlack)

}

function changeBackgroundColor() {
    let block = document.getElementById('grid')
    block.setAttribute('style', 'background: black;')
}

//Create container for the buttons that toggle different options
buttonContainer.setAttribute('id', 'buttonContainer');
container.appendChild(buttonContainer);

//Create buttons for current options
let buttonText = ['Eraser', 'Rainbow', 'Fill', 'Clear']
buttonText.forEach(function(e) {
    const buttons = document.createElement('button');
    buttons.setAttribute('id', e);
    buttons.textContent = e;
    buttonContainer.appendChild(buttons);
});

const reset = document.getElementById('Clear');
reset.addEventListener('click', () => location.reload());

const fill = document.getElementById('Fill');
fill.addEventListener('click', changeBackgroundColor)

function changeBoxSize() {
    let size = prompt("What size box would you like?\n Up to 100x100.")
    let sizeNumber = parseInt(size);
    if (sizeNumber > 0 && sizeNumber < 101) {
        boxDimensions = sizeNumber;
    }
}

//create sizeButton 
sizeButton.setAttribute('id', 'size');
sizeButton.textContent = "Change Number of Boxes";
sizeButton.addEventListener('click', changeBoxSize);
body.appendChild(sizeButton);