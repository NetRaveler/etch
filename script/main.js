let windowWidth = window.innerWidth;
let windowSize = windowWidth * .4;
let container = document.querySelector('#container');
let setWidth = document.getElementsByClassName('gridSquare');
let mySlide = document.getElementById('mySlide');
let valueDisplay = document.getElementById('valueDisplay');
let clear = document.getElementById('clear');
let pick = document.getElementById('pick');
let bw = document.getElementById('blackWhite');
let random = document.getElementById('random');
let userSize = 10;
let mode = 'default';


mySlide.addEventListener('change', clearGrid);

function changeColor(e) {
    if (mode === 'default') {
        e.target.style.backgroundColor = 'black';
    } else if (mode === 'pick') {
        e.target.style.backgroundColor = (document.getElementById('pick').value);
    } else if (mode === 'random') {
        let r1 = Math.floor(Math.random() * 256);
        let g1 = Math.floor(Math.random() * 256);
        let b1 = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = 'rgb(' + r1 + ',' + g1 + ',' + b1 + ')';
    }
}
clear.addEventListener('click', clearGrid);
pick.addEventListener('change', () => mode = 'pick');
bw.addEventListener('click', () => mode = 'default');
random.addEventListener('click', () => mode = 'random');




/* Display grid value on document load */
valueDisplay.innerHTML = 'Grid Size: ' + mySlide.value + 'x' + mySlide.value;


function clearGrid() {

    container.innerHTML = '';
    spawnGrid(windowSize, mySlide.value);
}

/* dynamicly show grid size input */
mySlide.oninput = function() {
    valueDisplay.innerHTML = 'Grid Size: ' + this.value + 'x' + this.value;
}



function findSquareSize(windowSize, userSize) {
    let squareSize = windowSize / userSize;
    return (squareSize);

}

function spawnGrid(windowSize, userSize) {

    /* Take the number user inputs and create a CSS Grid Layout Grid */
    let theWidth = findSquareSize(windowSize, userSize);
    container.style.gridTemplateColumns = 'repeat(' + userSize + ', 1fr)';
    container.style.gridTemplateRows = 'repeat(' + userSize + ', 1fr)';
    container.style.width = windowSize + 'px';
    container.style.height = windowSize + 'px';

    for (i = 0; i < userSize; i++) {
        for (j = 0; j < userSize; j++) {

            let div = document.createElement('div');
            div.addEventListener('mouseover', changeColor);
            container.appendChild(div);
            div.classList.add('gridSquare');
        }
    }
    for (i = 0; i < setWidth.length; i++) {
        setWidth[i].style.width = theWidth + 'px';
        setWidth[i].style.height = theWidth + 'px';
    }

}

spawnGrid(windowSize, 10);