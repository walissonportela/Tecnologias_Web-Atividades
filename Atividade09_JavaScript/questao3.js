/*
    Atividade09 - JavaScript 
    Nome: Joaquim Walisson Portela de Sousa
    Matrícula: 472152

    Questão 3
    Escreva uma função JavaScript para obter o primeiro elemento de um
    array. Passar um parâmetro 'n' retornará os primeiros 'n' elementos do
    array.
*/

array = [1, 2, 3, 4, 5];

num = 3;

function getFirstElement(array, num) {
    return array.slice(0, num);
}

console.log(getFirstElement(array, num))

