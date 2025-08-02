import { Gameboard } from "./Gameboard";
import { Player } from "./Player";

const Game = (() => {
    let currentPlayer = 0;
    const players = [
        Player("Player 1", "X"),
        Player("Player 2", "O")
    ];

    const getCurrentPlayer = () => players[currentPlayer];
    const switchPlayer = () => {
        currentPlayer = (currentPlayer + 1) % players.length;
    }

    const resetGame = () => {
        Gameboard.resetBoard();
        currentPlayer = 0;
    };

    const playRound = (index) => {
        const marker = getCurrentPlayer().getMarker();
        const success = Gameboard.placeMarker(index, marker);
        if (!success) return; // Invalid move

        if (checkWinner()) {
            console.log(`${getCurrentPlayer().getName()} wins!`);
            return;
        }

        if (checkTie()) {
            console.log("It's a tie!");
            return;
        }

        switchPlayer();
    };

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const checkWinner = () => {
    const board = Gameboard.getBoard();
    const marker = getCurrentPlayer().getMarker();

    return winningCombinations.some(combo =>
        combo.every(index => board[index] === marker)
    );
};
    const checkTie = () => {
        const board = Gameboard.getBoard();
        return board.every(cell => cell !== "");
    };

    return {
        getCurrentPlayer,
        switchPlayer,
        resetGame,
        playRound,
        checkWinner,
        checkTie
    };

});

export { Game };