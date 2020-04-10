
var string = 'viviani';

function getLetter(s){

    switch (s[0]) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            console.log("A");
            break;

        case "b":
        case "c":
        case "d":
        case "f":
        case "g":
            console.log("B");
            break;

        case "h":
        case "j":
        case "k":
        case "l":
        case "m":
            console.log("C");
            break;

        case "n":
        case "p":
        case "q":
        case "r":
        case "s":
        case "t":
        case "v":
        case "w":
        case "x":
        case "y":
        case "z":
            console.log("D");
            break;
    }
}

getLetter(string);