
var string = "javascriptloops";

function vowelsAndConsonants(s){
    var regexVowel = /[aeiou]/i; // capture a vowel

    for(let char=0; char < s.length; char++){
        if(regexVowel.test(s.charAt(char))){
            console.log(s.charAt(char));
        }
    }

    for(let char=0; char < s.length; char++){
        if(!regexVowel.test(s.charAt(char))){
            console.log(s.charAt(char));
        }
    }
}

vowelsAndConsonants(string);