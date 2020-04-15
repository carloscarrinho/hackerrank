
var clouds = 7;
var c = [0, 0, 1, 0, 0, 1, 0]; // expected output 4

var clouds_2 = 6;
var c_2 = [0, 0, 0, 0, 1, 0]; // expected output 3

function jumpingOnClouds(c){
    
    let jumps = 0;
    for(let i=0; i < c.length; i++){
        let nextNumb = c[i+1];
        let nextNumb2 = c[i+2];
        // console.log(`Current: ${currentNumb} Next: ${nextNumb} Then: ${nextNumb2}`);
        
        if((nextNumb === 0 && nextNumb2 === 0) || (nextNumb !== 0 && nextNumb2 === 0)){
            jumps += 1;
            i += 1;
            // console.log(`Pulei para o índice: ${i}`);
            
        } else if (nextNumb === 0 && nextNumb2 !== 0){
            jumps += 1;
            // console.log(`Caí no 2º else if e Pulei para o índice: ${i}`);
    
        } else { 
            continue;
        }
    }
    console.log(jumps);
}

jumpingOnClouds(c_2);

// 1, 3, 4, 6