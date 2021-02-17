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
			console.log("Winner : " + currentPlayer);
		}
	}
}

document.addEventListener('click',function(item){
    if (item.target.className === "cell"){
        const clickedCell = item.target;
        const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

		if (gameState[clickedCellIndex] != ""){
			return
		}else{
			gameState[clickedCellIndex] = currentPlayer;
			clickedCell.innerHTML = currentPlayer;
			currentPlayer = currentPlayer === "X" ? "O" : "X";
		}
		
        handleResult();
    }
    
    if (item.target.className === "restart-button"){
        document.querySelectorAll(".cell").forEach(item => {
           item.innerHTML = ""; 
        });
    }
});

