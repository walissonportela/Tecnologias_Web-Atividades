/*
    Atividade09 - JavaScript 
    Nome: Joaquim Walisson Portela de Sousa
    Matrícula: 472152

    Questão 6
    Escreva um programa JavaScript que aceite um número como entrada
    e insira traços (-) entre cada dois números pares. Por exemplo, se você
    aceitar 025468, a saída deve ser 0-254-6-8.
*/

numero = "025468";

function inserirTracos(num) {
    const entrada = num.toString().split('');
    const saida = [entrada[0]];
  
    for (let cont = 1; cont < entrada.length; cont++) {
      if (entrada[cont - 1] % 2 === 0 && entrada[cont] % 2 === 0) {
        saida.push('-', entrada[cont]);
      } else {
        saida.push(entrada[cont]);
      }
    }
  
    return saida.join('');
}

console.log(inserirTracos(numero));
  