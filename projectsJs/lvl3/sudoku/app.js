let numSel = null;
let tileSel = null;

const errors = 0;

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
]

const solution = [
    "592613847",
    "731849652",
    "846257913",
    "154378269",
    "978126534",
    "263495178",
    "387562491",
    "425931796",
    "619784325"
]

window.onload = ()=> {
setGame();
}

let setGame = ()=>{
    for (let i = 1; i<=9; i++) {
        let number = document.createElement('div');
        number.id = i;
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add('number');
        document.querySelector('#digits').appendChild(number);
    }

    for (let r = 1; r<=9; r++) {
       for (let c = 1; c <=9; c++){
        let tile = document.createElement('div');
        tile.id = r.toString() + '-' + c.toString();
        tile.classList.add('tile');
        document.querySelector('#board').append(tile);

       }
    }
}
let selectNumber = (e)=> {
    if (numSel != null) {
        numSel.classList.remove('select-number')
    }
    numSel = e.target;
    numSel.classList.add('select-number')
}
