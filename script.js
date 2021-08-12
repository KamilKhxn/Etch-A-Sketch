const blackBtn = document.querySelector('#black');
const rainbowBtn = document.querySelector('#rainbow');
const eraserBtn = document.querySelector('#eraser');
const clearBtn = document.querySelector('#clear');
const resizeBtn = document.querySelector('#resize');
const grid = document.querySelector('.grid');
const buttons = document.querySelectorAll("button");
let currentMode = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttonPressed(button.id);
    });
});

function removeButton(button) {

    blackBtn.classList.remove('press');
    rainbowBtn.classList.remove('press');
    eraserBtn.classList.remove('press');
    clearBtn.classList.remove('press');
    resizeBtn.classList.remove('press');
    
    if (button === 'black'){
        blackBtn.classList.add('press');
    }
    if (button === 'rainbow'){
        rainbowBtn.classList.add('press');
    }
    if (button === 'eraser'){
        eraserBtn.classList.add('press');
    }
    if (button === 'clear'){
        clearBtn.classList.add('press');
    }
    if (button === 'resize'){
        resizeBtn.classList.add('press');
    }   
}

function buttonPressed(button) {
    removeButton(button);
    currentMode = button;
}
let gridSize = 16;
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
            }
               })
    })
}
active();