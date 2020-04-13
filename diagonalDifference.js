var matrix = [
    [1, 2, 3], 
    [4, 5, 6], 
    [9, 8, 9]
];

var matrix_two = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 8, 7, 6],
    [5, 4, 3, 2]
]

var matrix_three = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 1],
    [2, 3, 4, 5, 6],
    [7, 8, 9, 1, 2],
    [3, 4, 5, 6, 7]
]

function sum(mtx){
    let firstDiag = 0;
    let secondDiag = 0;

    for(let i=0; i<mtx.length; i++){
        
        firstDiag += mtx[i][i];
        //to 0: mtx[0][0] = 1
        //to 1: mtx[1][1] = 7
        //to 2: mtx[2][2] = 4
        //to 3: mtx[3][3] = 1
        //to 3: mtx[4][4] = 7
        
        secondDiag += mtx[i][(mtx.length - 1) - i];
        // to 0: mtx[0][4] = 3
        // to 1: mtx[1][3] = 5
        // to 2: mtx[2][2] = 9
        // to 2: mtx[3][1] = 9
        // to 2: mtx[4][0] = 9
    }

    // Math.abs() takes the absolute result
    let result = Math.abs(firstDiag - secondDiag);

    console.log(result);
}

sum(matrix);
sum(matrix_two);
sum(matrix_three);