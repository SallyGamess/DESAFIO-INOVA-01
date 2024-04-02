function contarPalavras(frase) {
    let palavras = frase.split(' ');
    
    return palavras.length;
}

let frase = "What is Lorem Ipsum?";
let numeroDePalavras = contarPalavras(frase);

console.log('A frase', frase, 'possui', numeroDePalavras, 'palavras.');