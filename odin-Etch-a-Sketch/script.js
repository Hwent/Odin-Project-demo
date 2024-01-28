//parent container
const container = document.querySelector('.container');

//grid Initializer
function gridInit(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
    }
}

gridInit(10);

//painting
function paint() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            //each interaction randomizes the cell color
            let timesPainted = Number(cell.getAttribute('data-times-painted'));
            timesPainted++;
            let red = Math.floor(Math.random() * (256 - timesPainted * 25));
            let green = Math.floor(Math.random() * (256 - timesPainted * 25));
            let blue = Math.floor(Math.random() * (256 - timesPainted * 25));
            cell.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            cell.setAttribute('data-times-painted', timesPainted);
        });
    });
}

paint();

//clear button
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'lightgray';
        cell.setAttribute('data-times-painted', 0);
    });
});

//resize button
const resizeButton = document.querySelector('#resize');
resizeButton.addEventListener('click', () => {
    let gridSize = prompt('Enter a grid size between 1 and 16');
    if (gridSize < 1 || gridSize > 16) {
        alert('Invalid grid size');
    } else {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        gridInit(gridSize);
        paint();
    }
});

