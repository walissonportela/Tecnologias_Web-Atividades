/*
    Atividade09 - JavaScript 
    Nome: Joaquim Walisson Portela de Sousa
    Matrícula: 472152

    Questão 10
    Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente,
    o vetorPilha conterá cinco elementos inteiros: [1, 2, 3, 4, 5]. Você
    deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao
    vetor pilha e mostrá-los no console. 
*/

const vetorPilha = [1, 2, 3, 4, 5];
const vetorAdiciona = [6, 7, 8, 9, 10];

for (let i = 0; i < vetorAdiciona.length; i++) {
  vetorPilha.push(vetorAdiciona[i]);
}

console.log(vetorPilha);
