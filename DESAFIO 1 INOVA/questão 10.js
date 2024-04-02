let texto = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";

function contarLetrasMaiusculas(texto) {
    let contagem = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] >= 'A' && texto[i] <= 'Z') {
            contagem++;
        }
    }
    return contagem;
}
let numeroDeMaiusculas = contarLetrasMaiusculas(texto);
console.log("Número de letras maiúsculas no texto é:", numeroDeMaiusculas);
