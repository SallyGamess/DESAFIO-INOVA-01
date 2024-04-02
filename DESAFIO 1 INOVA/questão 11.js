function calcularIdade(dataNascimento) {
    let partesData = dataNascimento.split('-');
    let anoNascimento = parseInt(partesData[0]);
    let mesNascimento = parseInt(partesData[1]) - 1; 
    let diaNascimento = parseInt(partesData[2]);
    let hoje = new Date();
    let anoAtual = hoje.getFullYear();
    let mesAtual = hoje.getMonth(); 
    let diaAtual = hoje.getDate();
    let idade = anoAtual - anoNascimento;
    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }
    return idade;
}
const dataNascimento = "2000-08-05";
const idade = calcularIdade(dataNascimento);
console.log("A idade da pessoa é:", idade);
