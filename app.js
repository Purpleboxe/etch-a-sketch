const container = document.querySelector('#container');

function fillGrid(size = 16) {
    for (let i = 0; i < size; i++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add('row');

        for (let n = 0; n < size; n++) {
            let grid = document.createElement('div');
            grid.classList.add('grid');
            gridRow.appendChild(grid);
        }

        container.appendChild(gridRow);
    }
}

fillGrid();