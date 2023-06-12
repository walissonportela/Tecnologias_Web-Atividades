/*
    Atividade09 - JavaScript 
    Nome: Joaquim Walisson Portela de Sousa
    Matrícula: 472152

    Questão 8
    Escreva um programa JavaScript para remover itens duplicados de um
    array (ignore a diferenciação entre maiúsculas e minúsculas).  
*/

const array = ["Melancia", "Banana", "laranja", "melancia", "Uva", "banana"];

function removeDuplicates(array) {
    const lowerCaseMap = new Map();
    const result = [];
  
    for (let i = 0; i < array.length; i++) {
      const item = array[i].toLowerCase();
  
      if (!lowerCaseMap.has(item)) {
        lowerCaseMap.set(item, true);
        result.push(array[i]);
      }
    }
  
    return result;
}
  
console.log(removeDuplicates(array));

  