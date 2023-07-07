const container = document.querySelector('#container');
const slider = document.querySelector('#slider');
const rainbowBtn = document.querySelector('#rainbow');
const clearBtn = document.querySelector('#clear');

// Change size of grid on value change of slider
slider.onchange = (e) => changeSize(e.target.value);
slider.onmousemove = (e) => updateSizeValue(e.target.value);

let rainbow = false;
rainbowBtn.addEventListener('click', () => {
    if (rainbow == false) {
        rainbow = true;
        rainbowBtn.classList.add('selected');
    } else {
        rainbow = false;
        rainbowBtn.classList.remove('selected');
    }
})

clearBtn.addEventListener('click', () => {
    // Reset the grid when clear button is clicked
    resetGrid(slider.value);
})

function changeSize(value) {
    resetGrid(value);
}

function fillGrid(size = 16) {
    for (let i = 0; i < size; i++) {
        // Creates a div for every row
        let gridRow = document.createElement('div');
        gridRow.classList.add('row');

        for (let n = 0; n < size; n++) {
            // For each individual row grids will be placed
            let grid = document.createElement('div');
            grid.classList.add('grid');
            gridRow.appendChild(grid);
            // When the mouse enters a grid make it selected
            grid.addEventListener('mouseenter', (e) => {
                changeColor(e);
            })
        }
        // Append every row to the container
        container.appendChild(gridRow);
    }
}

function resetGrid(value) {
    // When changing size of the grid first empty the container than fill the grid with the new size
    container.innerHTML = '';
    fillGrid(value);
}

function updateSizeValue(value) {
    // When the slider is being moved update the visuals
    document.querySelector('.sizeValue').innerHTML = `${value} x ${value}`;
}

function changeColor(e) {
    if (rainbow == false) {
        e.target.style.backgroundColor = '#1C2321';
    } else if (rainbow == true) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
}

fillGrid();