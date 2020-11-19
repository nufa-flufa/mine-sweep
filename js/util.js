'use strict'

function createMat(num) {
    var mat = []
    for (var i = 0; i < num; i++) {
        var row = []
        for (var j = 0; j < num; j++) {
            row.push('')
        }
        mat.push(row)
    }
    return mat
}

function getCellCoord(strCellId) {
    var coord = {};
    var parts = strCellId.split('-');
    // ['cell','2','7']
    coord.i = +parts[1]
    coord.j = +parts[2];
    return coord;
}


// function renderBoard() {
//     var strHTML = '';
//     for (var i = 0; i < gBoardSize; i++) {
//         strHTML += '<tr>'
//         for (var j = 0; j < gBoardSize; j++) {
//             var cellNum = drawNum(gNums);
//             strHTML += `<td class="cell" data-cellnum=${cellNum} onclick="cellClicked(this)">${cellNum}</td>`
//         }
//         strHTML += '</tr>'
//     }
//     var elBoard = document.querySelector('.board');
//     elBoard.innerHTML = strHTML;
// }

// function cellClicked(elCell) {
//     var cellNum = +elCell.dataset.cellnum;
//     if (cellNum === CURR_NUM) {
//         CURR_NUM++
//         if (CURR_NUM === gNumLength + 1) {
//         }
//     }
// }



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}