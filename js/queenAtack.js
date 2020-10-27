// JS code for queen chess movement atack
// returns if queen can or can not atack a peon

//queen position
let queenPositionLine = 4;
let queenPositionColunm = 4;
//peon position
let peonPositionLine = 4;
let peonPositionColunm = 7;
//identify if atack can or can not happens
//line and column for queen position (4,4)
let canAtack = false;
if (queenPositionLine === peonPositionLine) {
    canAtack = true;
}
//this can be made with just one if and a ||
if (queenPositionColunm === peonPositionColunm) {
    canAtack = true;
}
//checking right up diagonal
for (let rightSuperior = 1; rightSuperior < 8; rightSuperior += 1) {
    let queenLine = queenPositionLine + rightSuperior;
    let queenColunm = queenPositionColunm + rightSuperior;
//checking the limit of the movement, if > 8, break
    if (queenLine > 8 || queenColunm > 8) {
        break;
    }
//cheking if can atack or not
    if ((peonPositionLine === queenLine) && (peonPositionColunm === queenColunm)) {
        canAtack = true;
    }
}

console.log(canAtack);
