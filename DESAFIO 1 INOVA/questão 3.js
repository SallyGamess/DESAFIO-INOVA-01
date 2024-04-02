function compararNumeros (a,b){
    return a-b;
}
let ordemCrescente = [12, 5, 23, 17, 8, 14, 3, 19];
ordemCrescente.sort(compararNumeros);
console.log (ordemCrescente);
