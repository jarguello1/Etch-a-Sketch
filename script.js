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
grid.textContent = 'The grid will go here.';

container.appendChild(grid);

const buttonContainer = document.createElement('div');
buttonContainer.setAttribute('id', 'buttonContainer');
container.appendChild(buttonContainer);

let buttonText = ['Toggle Color', 'Toggle Rainbow', 'Toggle Fill', 'Clear']
buttonText.forEach(function(e1) {
    const buttons = document.createElement('button');
    buttons.classList.add('optionBtn');
    buttons.textContent = "I'm a button.";
    buttonContainer.appendChild(buttons);
});