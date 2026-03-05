/*
 6 - Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. 
 Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", 
 o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.
*/

import { collectString } from "../utils/prompt-manager.js";
import { collectStudentGrades } from "../utils/student-manager.js";

export function startChallenge06() {
  const quantity = 2;
  const meanMin = 9.5;

  let canContinue = "";
  let approvedCount = 0;
  
  do {
    let grades = collectStudentGrades(quantity);
    let totalSum = grades.reduce((result, value) => result + value, 0);
    let finalMean = totalSum / grades.length;

    const isApproved = finalMean >= meanMin;
    if(isApproved) approvedCount++;

    let passedStatus = isApproved ? "" : "não ";
    alert(`A média final é ${finalMean.toFixed(2)}, você ${passedStatus}foi aprovado!`);

    canContinue = collectString("Calcular a média de outro aluno S/N?");
  } while (canContinue.toLowerCase() != "n");

  alert(`Total de alunos aprovados: ${approvedCount}`);
}
