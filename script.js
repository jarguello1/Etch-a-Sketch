const body = document.querySelector('body');
const title = document.createElement('h1');
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

function changeColor(e) {
    let block = e.target;
    block.setAttribute('style', 'background: black;'); 
}

//Create boxes in the grid
for (let i = 0; i < 16; i++) {
    for (let j = 1; j <= 16; j++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        gridSquare.textContent = j;
        grid.appendChild(gridSquare);
        gridSquare.addEventListener('mouseover', changeColor)
    }
}


//Create container for the buttons that toggle different options
buttonContainer.setAttribute('id', 'buttonContainer');
container.appendChild(buttonContainer);

//Create buttons for current options
let buttonText = ['Toggle Color', 'Toggle Rainbow', 'Toggle Fill', 'Clear']
buttonText.forEach(function(e) {
    const buttons = document.createElement('button');
    buttons.classList.add('optionBtn');
    buttons.textContent = e;
    buttonContainer.appendChild(buttons);
});

