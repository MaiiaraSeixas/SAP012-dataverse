// import { example, anotherExample } from '../src/dataFunctions.js';
// import { data as fakeData } from './data.js';

// console.log(fakeData);

// describe('example', () => {

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });

// describe('anotherExample', () => {

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });

// Importando a função de ordenação
const { orderdata } = require('./sua_funcao_de_ordenacao'); 

// Descrevendo o conjunto de testes para a função orderdata
describe('orderdata function', () => {

  // Array de exemplo para testes
  const testData = [
    { name: 'Joao' },
    { name: 'Aline' },
    { name: 'Barbara' },
    { name: 'Zoe' },
  ];

  // Testando se os dados são ordenados corretamente em ordem ascendente
  it('should order data in ascending order', () => {
    const orderedData = orderdata([...testData], 'asc');
    // Verificando se os dados ordenados são iguais aos dados esperados
    expect(orderedData).toEqual([
      { name: 'Aline' },
      { name: 'Babara' },
      { name: 'Joao' },
      { name: 'Zoe' },
    ]);
  });

  // Teste para verificar se os dados são ordenados corretamente em ordem descendente
  it('should order data in descending order', () => {
    const orderedData = orderdata([...testData], 'desc');
    // Verifique se os dados ordenados são iguais aos dados esperados
    expect(orderedData).toEqual([
      { name: 'Zoe' },
      { name: 'Joao' },
      { name: 'Barbara' },
      { name: 'Aline' },
    ]);
  });

  // Testando para verificar se a função não altera o array original
  it('should not mutate the original array', () => {
    // Fazendo uma cópia dos dados de teste
    const originalData = [...testData];
    // Chamando a função orderdata
    orderdata(originalData, 'asc');
    // Verificando se o array original não foi alterado
    expect(originalData).toEqual(testData);
  });
});
