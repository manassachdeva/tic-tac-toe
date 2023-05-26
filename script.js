var player = "X";
var board = [];
let music=new Audio("music.mp3");
for (var i = 0; i < 9; i++) {
	board.push("");
}

var cells = document.querySelectorAll(".cell");

cells.forEach(function(cell) {
	cell.addEventListener("click", function() {
		var index = cell.id;
		if (board[index] === "") {
			board[index] = player;
			cell.innerHTML = player;
			if (player === "X") {
				player = "O";
			} else {
				player = "X";
			}
			checkWinner();
		}
	});
});

function checkWinner() {
	var winner = null;
	var patterns = [		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	for (var i = 0; i < patterns.length; i++) {
		var pattern = patterns[i];
		if (board[pattern[0]] !== "" && board[pattern[0]] === board[pattern[1]] && board[pattern[1]] === board[pattern[2]]) {
			winner = board[pattern[0]];
			break;
		}
	}

	if (winner !== null) {
		alert("Player " + winner + " wins!");
	}
}
