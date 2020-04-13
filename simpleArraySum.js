var arr = [1, 2, 3, 4, 5];

function simpleArraySum(arr){

    let sum = 0;
    for(let i=0; i < arr.length; i++) {
        let currentItem = arr[i]
        sum += currentItem;
    }

    return console.log(sum);
}

simpleArraySum(arr);