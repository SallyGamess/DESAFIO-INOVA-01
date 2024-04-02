function calcularMulta(diasDeAtraso) {
    let atrasoDia = 0.50;
    let multaTotal = diasDeAtraso * atrasoDia;
    return multaTotal;
}

let diasDeAtraso = 7;
let multa = calcularMulta(diasDeAtraso);
console.log(`O usuário deverá pagar R$ ${multa} de multa.`);