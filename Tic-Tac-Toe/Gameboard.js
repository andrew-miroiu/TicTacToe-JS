const Gameboard = ( function() {
    let board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => board;

    const placeMarker = (index, marker) => {
        if(board[index] === "") {
            board[index] = marker;
        }
    }

    const resetBoard = () => {
        board = ["", "", "", "", "", "", "", "", ""];
    };

    return {
        getBoard,
        placeMarker,
        resetBoard
    };
})();

export { Gameboard };

