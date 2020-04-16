var s = 'abcac';
var n = 10;

// aba aba aba aba aba aba aba   

// print occurrences of 'a' 

function repeatedString(s, n){

    if (!(s === 'a')){
        let repetition = [];
        for(let i=0; i < n; i++){
            repetition.push(s);
        }
    
        let repeated = repetition.toString().replace(/,/ig, "").slice(0, n);
        let aOcurrences = repeated.match(/a/ig);
    
        return aOcurrences.length;
    }

    return n;
}

repeatedString(s, n);   