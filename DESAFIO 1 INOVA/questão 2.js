function compararNumeros (a,b){
    return a-b;
}

let ordemCrescente = [ 15, 8, 90, 75, 102, 6, 2];
ordemCrescente.sort(compararNumeros);
let menor =  ordemCrescente[0];
let maior = ordemCrescente[ordemCrescente.length - 1];
console.log (`o menor número é ${menor} e o maior é ${maior}`);
