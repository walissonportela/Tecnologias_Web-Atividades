/*
    Atividade09 - JavaScript 
    Nome: Joaquim Walisson Portela de Sousa
    Matrícula: 472152

    Questão 9
    Existem dois arrays com valores individuais, escreva um programa
    JavaScript para calcular a soma de cada valor de índice individual dos
    arrays fornecidos. 
*/

array1 = [1, 2, 3, 4, 5];
array2 = [6, 7, 8, 9, 10];

function somaArrays(array1, array2) {
    const result = [];
  
    const maxLength = Math.max(array1.length, array2.length);
  
    for (let i = 0; i < maxLength; i++) {
      const value1 = array1[i] || 0;
      const value2 = array2[i] || 0;
      result.push(value1 + value2);
    }
  
    return result;
}

console.log(somaArrays(array1, array2))
  