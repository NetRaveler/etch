let container = document.querySelector('#container');
let setWidth = document.getElementsByClassName('gridSquare');
let colorScheme = 'black';
let theColor;
let mySlide = document.getElementById('mySlide');
let valueDisplay = document.getElementById('valueDisplay');
let clear = document.getElementById('clear');
let bw = document.getElementById('blackWhite');
let pick = document.getElementById('pick');
let chaos = document.getElementById('random');
let userSize = 10;
let windowWidth = window.innerWidth;
let windowSize = windowWidth * .7;

clear.onclick = clearGrid;
bw.onclick = getScheme('black');
pick.onclick = getScheme('color');
chaos.onlick = getScheme('red');

function clearGrid() {
    container.innerHTML = '';
    console.log('hello');
    spawnGrid(windowSize, mySlide.value);
}
valueDisplay.innerHTML = 'Grid Size: ' + mySlide.value + 'x' + mySlide.value;

mySlide.oninput = function() {
    valueDisplay.innerHTML = 'Grid Size: ' + this.value + 'x' + this.value;
}

function getScheme(theColor) {
    colorScheme = theColor;
    return (colorScheme);
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

function changeColor(e) {


    if (colorScheme === 'black') {
        e.target.style.backgroundColor === 'black';
    } else if (colorScheme === 'color') {
        e.target.style.backgroundColor = 'pink';
    } else {
        e.target.style.backgroundColor = 'black';
    }
    console.log(colorScheme);
}



spawnGrid(600, 100);