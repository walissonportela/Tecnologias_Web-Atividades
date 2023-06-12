/*
     Atividade09 - JavaScript 
     Nome: Joaquim Walisson Portela de Sousa
     Matrícula: 472152

     Questão 1 
     Escreva uma função JavaScript para verificar se uma `entrada` é um array ou não.
*/

array = [1, 2, 3, 4, 5]

function isArray(entrada) {
    return Array.isArray(entrada);
}

console.log(isArray(array))
  