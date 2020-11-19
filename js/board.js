'use stirct'

// RENDER BOARD
function renderBoard() {
    var strHTML = '';
    for (var i = 0; i < gBoard.length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < gBoard[0].length; j++) {
            var currCell = gBoard[i][j];
            var styleNum = 'green'
            var cellId = i + '-' + j;
            strHTML += `<td id="cell-${cellId}" class="cell ${currCell.type}" ondblclick="cellClicked(this)" style="color:${styleNum};" onclick="checkMine(this)"></td>`
        }
        strHTML += '</tr>'
    }
    var elBoard = document.querySelector('.board');
    elBoard.innerHTML = strHTML;
}

// PUTS THE ARRAY IN BOARD
function putBombsInBoard(gBoard, empty, bomb) {
    var gameArray = createArray(empty, bomb);
    // console.log(gameArray)
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard[0].length; j++) {
            var currCell = gBoard[i][j]
            currCell.type += gameArray[0];
            if(currCell.type === 'bomb') currCell.isMine = true;
            // console.log(currCell)
            gameArray.shift()
        }
    }
}

// CREATE THE ARRAY WITH THE BOMB RANDOMLY INSIDE
function createArray(empty, bomb) {
    var emptyArray = Array(empty).fill('empty')
    var bombArray = Array(bomb).fill('bomb')
    var gameArray = emptyArray.concat(bombArray);
    var shuffledArray = gameArray.sort(() => Math.random() - 0.5)
    return shuffledArray;
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
        isShown: false,
        isMine: false,
        isMarked: true
    }
}

function setTimer () {
    timerId = setInterval(function(){
        gElapsedTime += 1;
      document.querySelector('.timer').innerText = gElapsedTime.toString().padStart(3, '0');
    }, 1000);
  };
  