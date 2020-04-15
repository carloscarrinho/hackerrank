var arr = [3, 13, 4, 11, 9];

function simpleArraySum(arr){

    let sum = 0;
    for(let i=0; i < arr.length; i++) {
        let currentItem = arr[i]
        sum += currentItem;
    }

    return console.log(sum);
}

simpleArraySum(arr);