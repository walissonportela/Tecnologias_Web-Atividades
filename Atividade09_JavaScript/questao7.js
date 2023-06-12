/*
    Atividade09 - JavaScript 
    Nome: Joaquim Walisson Portela de Sousa
    Matrícula: 472152

    Questão 7
    Escreva um programa JavaScript para localizar o item mais frequente
    de um array.
*/

array = [1, 2, 7, 1, 4, 5, 4, 6, 7, 0, 9, 7, 10, 7, 0, 9, 2, 1];

function itemMaisFrequente(array) {
    const frequencyMap = {};
  
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      frequencyMap[item] = frequencyMap[item] ? frequencyMap[item] + 1 : 1;
    }
  
    let itemFrequente;
    let frequenciaMax = 0;
  
    for (const item in frequencyMap) {
      if (frequencyMap[item] > frequenciaMax) {
        itemFrequente = item;
        frequenciaMax = frequencyMap[item];
      }
    }
  
    return itemFrequente;
}

console.log("O item mais frequente é o %d.",itemMaisFrequente(array));