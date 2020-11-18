'use strict';
console.log('this is connected');

var gBoard;
const MINE = '&#128163;'
var gDifficulty = 'Easy';
var gBombsAmount = 0;


function init() {

    if (gDifficulty === 'Easy') {
        gBombsAmount = 2;
        gBoard = createBoard(4);
    }
    if (gDifficulty === 'Medium') {
        gBombsAmount = 10;
        gBoard = createBoard(8);
    }
    if (gDifficulty === 'Hard') {
        gBombsAmount = 20;
        gBoard = createBoard(12);
    }
    console.table(gBoard)
    putBombsInBoard(gBoard)
    renderBoard();
}

function setMode(difficulty) {
    gDifficulty = difficulty
    init()
}

function cellClicked(elCell) {
    var coords = getCellCoord(elCell.id)
    console.log('i', coords.i, 'j', coords.j)
    var mineCount = setMineNegCount(coords.i, coords.j, gBoard)
    gBoard[coords.i][coords.j].minesAroundCount += mineCount;
    elCell.innerText = mineCount;
}

function renderBoard() {
    var strHTML = '';
    for (var i = 0; i < gBoard.length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < gBoard[0].length; j++) {
            // var cell = putBombsInBoard(gBoard);
            var cellId = i + '-' + j;
            strHTML += `<td id="cell-${cellId}" class="cell" onclick="cellClicked(this)"></td>`
        }
        strHTML += '</tr>'
    }
    var elBoard = document.querySelector('.board');
    elBoard.innerHTML = strHTML;
}

//CREATE BOARD (+MAT)
function createBoard(num) {
    var board = []
    for (var i = 0; i < num; i++) {
        board[i] = []
        for (var j = 0; j < num; j++) {
            board[i][j] = createCell();
        }
    }
    return board;
}

// CREATE THE CELL
function createCell() {
    return {
        type: '',
        minesAroundCount: 0,
        isShown: true,
        isMine: false,
        isMarked: true
    }
}
//CHECKING NEIGHBOURS
function setMineNegCount(cellI, cellJ, mat) {
    var minesSum = 0;
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= mat.length) continue;
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (i === cellI && j === cellJ) continue;
            if (j < 0 || j >= mat[i].length) continue;
            if (mat[i][j] === MINE) minesSum++;
        }
    }
    return minesSum;
}

