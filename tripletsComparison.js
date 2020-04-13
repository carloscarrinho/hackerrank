var alice = [4, 2, 3];
var bob = [3, 2, 1];

function compareTriplets(a, b){

    let sumOfA = 0;
    let sumOfB = 0;

    for(let i=0; i< a.length; i++){
        
        if(a[i] > b[i]){
            sumOfA += 1;
        }else if (a[i] == b[i]) {
            continue;
        }else {
            sumOfB += 1;
        }
    }

    let points = [sumOfA, sumOfB];
    return console.log(points);
}

compareTriplets(alice, bob);

// a = 2;
// b = 0;