// Definindo o número para calcular a tabuada
let numero = 7;
let resultado;

console.log(`Tabuada do ${numero}:`);

// Usando um loop for para calcular e exibir a tabuada
for (let i = 1; i <= 10; i++) {
  resultado = numero * i;
  console.log(`${numero} x ${i} = ${resultado}`);
}