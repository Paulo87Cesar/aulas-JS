const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020
  };
  
  console.log('Propriedades do carro:');
  
  // Iterando sobre as propriedades do objeto 'carro' usando for...in
  for (let chave in carro) {
    console.log(chave + ': ' + carro[chave]);
  }