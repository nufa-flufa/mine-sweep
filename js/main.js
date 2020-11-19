'use strict';
console.log('this is connected');
const FLAG_IMG = '&#128681;'
const BOMB_IMG = '&#128163';
var gBoard;
var gDifficulty = 'Easy';
var gBombsAmount = 0;
var gElapsedTime = setTimer();
var isGameOn = true;


function init() {

    if (gDifficulty === 'Easy') {
        gBoard = createBoard(4);
        putBombsInBoard(gBoard, 14, 2)
        
    }
    if (gDifficulty === 'Medium') {
        gBoard = createBoard(8);
        putBombsInBoard(gBoard, 52, 12);
        
    }
    if (gDifficulty === 'Hard') {
        gBoard = createBoard(12);
        putBombsInBoard(gBoard, 114, 30)
        
    }
    console.table(gBoard)
    gElapsedTime = 0;
    // setTimer()
    renderBoard();
}
function restart(){
    // console.log('blah')
    // gDifficulty = 'easy';
    init();
    gElapsedTime;

}

function setMode(difficulty) {
    gDifficulty = difficulty
    init()
    gElapsedTime
}

function cellClicked(elCell) {
    var coords = getCellCoord(elCell.id)
    console.log('i', coords.i, 'j', coords.j)
    var mineCount = setMineNegCount(coords.i, coords.j, gBoard)
    gBoard[coords.i][coords.j].minesAroundCount += mineCount;
    elCell.innerText = mineCount;
    elCell.isShown = true;
    if (elCell.className === 'cell bomb'){
        elCell.innerHTML = BOMB_IMG
        var bombs = document.querySelectorAll('cell bomb')
        console.log(bombs)
        alert('oops')
    } 
}



function checkMine(elCell) {
    elCell.innerHTML = FLAG_IMG
}



//CHECKING NEIGHBOURS
function setMineNegCount(cellI, cellJ, mat) {
    var minesSum = 0;
    var currCell = gBoard[cellI][cellJ]
    if (currCell.type == 'bomb') currCell.innerHTML = BOMB_IMG
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= mat.length) continue;
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (i === cellI && j === cellJ) continue;
            if (j < 0 || j >= mat[i].length) continue;
            if (mat[i][j].type === 'bomb') {
                minesSum++;
                mat[i][j].minesAroundCount = minesSum
            }
        }
    }
    return minesSum;
}

function isGameOver() {
    alert('oops')
}

