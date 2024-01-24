const PLAYER1 = 'O';
const PLAYER2 = 'X';
let round = 1;
const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
const combinations = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

const boxes = document.querySelectorAll('.box');
arrBoxes = [...boxes];

const pick = (e)=> {
  const row = parseInt(e.target.dataset.row);
    const col = parseInt(e.target.dataset.column);


    const turn = round % 2 === 0 ? PLAYER2 : PLAYER1;

    if (board[row][col] !== '') return;
    e.target.textContent = turn;
    board[row][col] = turn;
    round++;

    console.log(check());
}
arrBoxes.forEach(box => box.addEventListener('click', pick));


const check =() =>{
    const result = board.reduce((total, row) => total.concat(row));
    let winner = null;
    let moves = {
        'X': [],
        'O': []
    };
    result.forEach((field, index) => moves[field] ? moves[field].push(index) : null);
    combinations.forEach(combination => {
        if (combination.every(index => moves[PLAYER1].indexOf(index) > -1)) {
            winner = 'Player O';
        }
        if (combination.every(index => moves[PLAYER2].indexOf(index) > -1)) {
            winner = 'Player X';
        }
    });

    if (winner) {
        document.getElementById('winner-name').textContent = winner;
    }
}