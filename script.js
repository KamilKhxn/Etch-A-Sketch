const blackBtn = document.querySelector('#blackButton');
const rainbowBtn = document.querySelector('#rainbowButton');
const eraserBtn = document.querySelector('#eraserButton');
const clearBtn = document.querySelector('#clearButton');
const resizeBtn = document.querySelector('#resizeButton');
const grid = document.querySelector('.grid');
let currentMode = '';

blackBtn.addEventListener('click', () => {
    buttonPressed('b');
});
rainbowBtn.addEventListener('click', () => {
    buttonPressed('r');
});
eraserBtn.addEventListener('click', () => {
    buttonPressed('e');
});
clearBtn.addEventListener('click', () => {
    buttonPressed('c');
});
resizeButton.addEventListener('click', () => {
    buttonPressed('re');
});

function removeButton(button) {
    switch (button) {
        case 'b':
            rainbowBtn.classList.remove('press');
            eraserBtn.classList.remove('press');
            clearBtn.classList.remove('press');
            resizeBtn.classList.remove('press');
            break;
        case 'r':
            blackBtn.classList.remove('press');
            eraserBtn.classList.remove('press');
            clearBtn.classList.remove('press');
            resizeBtn.classList.remove('press');
            break;
        case 'e':
            blackBtn.classList.remove('press');
            rainbowBtn.classList.remove('press');
            clearBtn.classList.remove('press');
            resizeBtn.classList.remove('press');
            break;
        case 'c':
            blackBtn.classList.remove('press');
            rainbowBtn.classList.remove('press');
            eraserBtn.classList.remove('press');
            resizeBtn.classList.remove('press');
            break;
        case 're':
            blackBtn.classList.remove('press');
            rainbowBtn.classList.remove('press');
            eraserBtn.classList.remove('press');
            clearBtn.classList.remove('press');
    }
}

function buttonPressed(button) {
    switch (button) {
        case 'b':
            removeButton('b');
            black();
            break;
        case 'r':
            removeButton('r');
            rainbow();
            break;
        case 'e':
            removeButton('e');
            eraser();
            break;
        case 'c':
            removeButton('c');
            clear();
            break;
        case 're':
            removeButton('re');
            resize();
            break;
    }
}

function black() {
    blackBtn.classList.add('press');
    currentMode = 'black';
}
function rainbow() {
    rainbowBtn.classList.add('press');
    currentMode = 'rainbow';
}
function eraser() {
    eraserBtn.classList.add('press');
    currentMode = 'eraser';
}
function clear() {
    clearBtn.classList.add('press');
    currentMode = 'clear';
}
function resize() {
    resizeBtn.classList.add('press');
    let answer = prompt('enter grid size');
}

let gridSize = 8;
let pixel = '';
const drawGrid = (screenSize) => {
    for(i = 0; i < screenSize ** 2; i++){
        pixel = document.createElement('div');
        pixel.classList.add('squares');//squares
        //pixel.style.backgroundColor = 'white';
        grid.appendChild(pixel);
    }
   
    grid.style.gridTemplateColumns = `repeat(${screenSize}, auto)`;
    grid.style.gridTemplateRows = `repeat(${screenSize}, auto)`;
}//end of drawGrid()

drawGrid(gridSize);

const randomColor = () => {
    let color = 'rgba(';
    for(let i = 0;i< 3;i++){
      color += Math.floor(Math.random() * 255) + ',';
    }
    return color + '1)';
  }

const active = () =>{
    let pixels = document.querySelectorAll('.squares');
    pixels.forEach(pxl =>{
        pxl.addEventListener('mouseover', (e) => {
            let crntClr = getComputedStyle(pxl, null).getPropertyValue('background-color');
            switch (currentMode){
                case 'black':
                    e.target.style.backgroundColor = 'rgba(0,0,0)';
                    break;
                case 'rainbow':
                    e.target.style.backgroundColor = randomColor();
                    break;
                case 'eraser':
                    e.target.style.backgroundColor = 'rgb(255,255,255)';
                    break;
                case 'clear':
                    e.target.style.backgroundColor = 'rgb(255,255,255)';
                    break;
            }
               })
    })
}
active();