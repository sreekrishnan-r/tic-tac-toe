let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;
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


function handlePlayerChange(){
    
    if (!gameOver){
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        document.querySelector(".game-status").innerHTML = "It's " + currentPlayer + " turn";
    }
}

function handleResult(){
    for (let i=0 ; i<=7; i++){
		const winningPositionData = winningPosition[i]
		let a = gameState[winningPositionData[0]];
		let b = gameState[winningPositionData[1]];
		let c = gameState[winningPositionData[2]];
		
		if (a === '' || b === '' || c === ''){
			continue;
		}
		
		if (a === b && b === c){
            document.querySelector(".game-status").innerHTML = "Winner : " + currentPlayer;
            gameOver = true;
		}
	}
    
    if (!gameState.includes("")){
        gameOver = true
        document.querySelector(".game-status").innerHTML = "Game is Tie";
    }
}

document.addEventListener('click',function(item){
    if (item.target.className === "cell"){
        if (!gameOver){
            const clickedCell = item.target;
            const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

            if (gameState[clickedCellIndex] != ""){
                return
            }else{
                gameState[clickedCellIndex] = currentPlayer;
                clickedCell.innerHTML = currentPlayer;
                handleResult();
                handlePlayerChange();
            }
        }
    }
    
    if (item.target.className === "restart-button"){
        document.querySelectorAll(".cell").forEach(item => {
            item.innerHTML = ""; 
            gameState = ["", "", "", "", "", "", "", "", ""];
            currentPlayer = "X";
            gameOver = false;
            document.querySelector(".game-status").innerHTML = "";
            document.querySelector(".game-status").innerHTML = "It's " + currentPlayer + " turn";
        });
    }
});

document.querySelector(".game-status").innerHTML = "It's " + currentPlayer + " turn";
