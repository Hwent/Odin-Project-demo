const container1 = document.querySelector('#container1');

const divAdd = document.createElement('div');
divAdd.setAttribute('id', 'add');
divAdd.setAttribute('class', 'add');
divAdd.classList.remove('add');
divAdd.removeAttribute('id');
divAdd.textContent = 'Hey I\'m red!';
divAdd.style.color = 'red';
divAdd.style.backgroundColor = 'blue';
divAdd.style.cssText = 'color: red; background-color: blue;';
container1.appendChild(divAdd);

//loop through all the children of container1 and find p child equal to 2
for (const element of container1.children) {
    if (element.textContent === '2') {
        container1.removeChild(element);
    }
}

//create a button creator function
function createButton(text) {
    const btn = document.createElement('button');
    btn.type = 'button'; // specify the type here
    btn.textContent = text;
    return btn;
}

// create a alert button then append it to container1
let btn = createButton('Click me');
btn.addEventListener('click', (e) => {
    console.log(e.target);
    alert('Hello World');
});
container1.appendChild(btn);

// create a button that removes itself when clicked
btn = createButton('Remove me');
btn.addEventListener('click', () => {
    container1.removeChild(btn);
});
container1.appendChild(btn);

// create a button that creates a new button when clicked
const btn3 = createButton('Add new button');
btn3.addEventListener('click', () => {
    const btn4 = createButton('New button');
    container1.appendChild(btn4);
});
container1.appendChild(btn3);

//use onclock attribute to switch background when clicked
const btn5 = createButton('Change background');
btn5.setAttribute('onclick', 'this.style.backgroundColor = \'blue\'');
container1.appendChild(btn5);

//change container1 background when mouseover
container1.addEventListener('mouseover', () => {
    container1.style.backgroundColor = 'green';
});

//change container1 background when mouseout
container1.setAttribute('onmouseout', 'this.style.backgroundColor = \'white\'');


