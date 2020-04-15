var steps = 8;
var steps_2 = 12;
var steps_3 = 10;

var path = "DDUUUUDD"; // 8 steps --> 1 valley
var path_2 = "DDDDUUDDUUUU"; // 12 --> 2 valleys
var path_3 = "DDUUUDDDUU"; // 10 --> 1 valley

// output: print a single integer that denotes the number of valleys

function countingValleys(n, s){
    var valleys = 0;
    var level = 0;
    // var sampleArray = s.split('');
    // console.log(s.charAt(0));
    
    for(let i=0; i < n; i++){
        let currentLetter = s.charAt(i);
        if(currentLetter === "D"){
            level = level - 1;
            // console.log(level);

        } else if (level == -1 && currentLetter === "U") {
            level = level + 1;
            valleys = valleys + 1;
            // console.log(`Cheguei em ${level}, passei por ${valleys} valley(s)`);

        } else {
            level = level + 1;
            // console.log(level);
        }
    }
    console.log(valleys);
    
}

countingValleys(steps, path);
countingValleys(steps_2, path_2);
countingValleys(steps_3, path_3);