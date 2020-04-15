var n = 7;
var n_2 = 9;
var n_3 = 10;
var n_4 = 15;

var ar = [1, 2, 1, 2, 1, 3, 2]; //teste: 3->1, 3->2 e 1->3; ou seja: 2 pares.
var ar_2 = [1, 2, 1, 2, 1, 3, 2, 3, 1, 3]; //teste: 4->1, 3->2 e 3->3; ou seja: 4 pares.
var ar_3 = [1, 2, 1, 2, 1, 3, 2, 3, 1, 3, 4, 4, 2, 1, 3]; //teste: 5->1, 4->2, 4->3 e 2->4; ou seja: 7 pares.
var ar_4 = [10, 20, 20, 10, 10, 30, 50, 10, 20]; //teste: 4->10, 3->20, 1->30 e 1->50; ou seja: 3 pares.

function sockMerchant(n, ar){
    
    // identificar tipo
    let types = ar.filter((element, i) => {
        return ar.indexOf(element) === i;
    })
    console.log(types);
    // [1, 2, 3]
    
    // agrupar meias por tipo
    let occurs = {};
    for(let i=0; i < n; i++){
        occurs[ar[i]] = (occurs[ar[i]] || 0) + 1;
    }
    console.log(occurs);
    // { 1: [3], 2: [3], 3: [1]}

    // contar a quantidade de pares
    let pairs = 0;

    for(let i = 0; i < types.length; i++){
        let count = types[i];

        if((occurs[`${count}`] % 2) == 0){
            let result = (occurs[`${count}`] / 2);
            pairs += result;
        } else if ((occurs[`${count}`] % 2) != 0){
            let result = parseInt(occurs[`${count}`] / 2);
            pairs += result;
        }
    }
    console.log(pairs);
}

sockMerchant(n_4, ar_4);