let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
let winningPosition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], 
];


function handleCellClicked(cell, cellIndex){
    
    if (gameState[cellIndex] != ""){
        return
    }else{
        gameState[cellIndex] = currentPlayer;
        cell.innerHTML = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
    
}

function handleResult(){
    
    
    
}


document.addEventListener('click',function(item){
    if (item.target.className === "cell"){
        const clickedCell = item.target;
        const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
        handleCellClicked(clickedCell, clickedCellIndex);
        handleResult();
    }
    
    if (item.target.className === "restart-button"){
        document.querySelectorAll(".cell").forEach(item => {
           item.innerHTML = ""; 
        });
    }
});

