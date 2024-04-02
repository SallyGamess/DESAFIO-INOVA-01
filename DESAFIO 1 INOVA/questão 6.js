function fatorialNumero(numero) {
  if (numero < 0) 
        return -1;
  else if (numero == 0) 
      return 1;
  else {
      return (numero * fatorialNumero(numero - 1));
  }
}
let resultado = fatorialNumero(12);
console.log('O fatorial do número 12 é=', resultado);