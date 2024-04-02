function definirNumeroPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

function identificarNumerosPrimos(numeros) {
    let primos = [];
    for (let numero of numeros) {
        if (definirNumeroPrimo(numero)) {
            primos.push(numero);
        }
    }
    return primos;
}

let numeros = [23, 16, 11, 8, 19, 14, 5, 21];
let numerosPrimos = identificarNumerosPrimos(numeros);
console.log("Números primos na lista:", numerosPrimos);
console.log("o fazendeiro deverá plantar", numerosPrimos.length, "novos campos" );