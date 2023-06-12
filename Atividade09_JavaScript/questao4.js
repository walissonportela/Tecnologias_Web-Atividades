/*
    Atividade09 - JavaScript 
    Nome: Joaquim Walisson Portela de Sousa
    Matrícula: 472152

    Questão 4
    Escreva uma função JavaScript para obter o último elemento de um
    array. Passar um parâmetro 'n' retornará os últimos 'n' elementos do
    array.
*/

array = [1, 2, 3, 4, 5];

num = 3;

function getLastElement(array, num) {
    return array.slice(-num);
}

console.log(getLastElement(array, num))