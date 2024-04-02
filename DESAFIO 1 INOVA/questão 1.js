alert('digite as notas das avaliações a seguir para calcular a média');
let nota1 = parseFloat(prompt('Digite a nota da Avaliação 1'));
let nota2 = parseFloat(prompt('Digite a nota da avaliação 2'));
let nota3 = parseFloat(prompt('Digite a nota da avaliação 3'));
let soma = nota1 + nota2 + nota3;
let media = parseFloat(soma / 3);
alert (`A média é igual a ${media}`);