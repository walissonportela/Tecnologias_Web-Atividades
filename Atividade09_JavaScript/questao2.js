/*
     Atividade09 - JavaScript 
     Nome: Joaquim Walisson Portela de Sousa
     Matrícula: 472152

     Questão 2
     Escreva uma função JavaScript para clonar um array.
*/
array1 = [1, 2 ,3 ,4 ,5]

function cloneArray(array) {
    return array.slice();
}

array2 = cloneArray(array1);

console.log(array2)
  