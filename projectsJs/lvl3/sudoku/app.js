let numSel = null;
let tileSel = null;

let errors = 0;

const board = [
  "---6--8--",
  "7-18-9-5-",
  "---25-9-3",
  "--4----6-",
  "97-----34",
  "-6----1--",
  "3-7-62---",
  "-2-9-17-6",
  "--9--4---"
];

const sol = [
  "592613847",
  "731849652",
  "846257913",
  "154378269",
  "978126534",
  "263495178",
  "387562491",
  "425931786",
  "619784325",
];

window.onload = () => {
  setGame();
};


let setGame = () => {
  document.querySelector('#digits').innerHTML = "";
  document.querySelector('#board').innerHTML = "";

  for (let i = 1; i <= 9; i++) {
    let number = document.createElement("div");
    number.id = i;
    number.innerText = i;
    number.addEventListener("click", selectNumber);
    number.classList.add("number");
    document.querySelector("#digits").appendChild(number);
  }

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      if (board[r][c] != "-") {
        tile.innerText = board[r][c];
        tile.classList.add('start-tile')
      }
      if (r == 2 || r == 5){
        tile.classList.add('h-line')
      }
      if (c == 2 || c ==5){
        tile.classList.add('v-line')
      }
      tile.addEventListener("click", selTile);
      tile.classList.add("tile");
      document.querySelector("#board").append(tile);
    }
  }
};
let selectNumber = (e) => {
  if (numSel != null) {
    numSel.classList.remove("select-number");
  }
  numSel = e.target;
  numSel.classList.add("select-number");
};
let selTile = (e) => {
  if (numSel) {
    if (e.target.innerText != "") {
      return;
    }
    let coords = e.target.id.split('-');
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    if (sol[r][c] == numSel.id){
        e.target.innerText = numSel.id;
    } 
    else {
        errors++;
        document.querySelector('#errors').innerText = errors
    }
  }
};
const restartBtn = document.querySelector('.restart');
restartBtn.addEventListener('click', setGame)
