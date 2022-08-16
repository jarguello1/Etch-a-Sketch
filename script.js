const body = document.querySelector('body');

//create title
const title = document.createElement('h1');
title.setAttribute('id', 'title');
title.textContent = 'Etch-a-Sketch';

body.appendChild(title);

//create div container to hold grid
const container = document.createElement('div');
container.setAttribute('id', 'container');

body.appendChild(container);

//create grid div
const grid = document.createElement('div');
grid.setAttribute('id', 'grid');

container.appendChild(grid);

//Create boxes in the grid
for (let i = 0; i < 16; i++) {
    for (let j = 1; j <= 16; j++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        gridSquare.textContent = j;
        grid.appendChild(gridSquare);

    }
}

//Create container for the buttons that toggle different options
const buttonContainer = document.createElement('div');
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