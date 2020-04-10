var nums = [2, 3, 6, 6, 5];

function getSecondLargest(arr){
    arr.sort();

    var largest = arr[0];
    var secondLargest;

    console.log(arr);

    for(let i=0; i < arr.length; i++){
        let currentNumb = arr[i];
        
        if(currentNumb > largest){
            secondLargest = largest;
            largest = currentNumb;
        }else if (currentNumb < largest && currentNumb > secondLargest){
            secondLargest = currentNumb;
        }
    }

    return console.log(secondLargest);
}

getSecondLargest(nums);
