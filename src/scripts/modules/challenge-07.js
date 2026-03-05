/*
 7 - Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. 
 Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total.
 Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário.
*/

import { collectStudentGrades } from "../utils/student-manager.js";
import { calcMeanAsText } from "../utils/math-utils.js";

export function startChallenge07() {
  const quantity = 6;
  const grades = collectStudentGrades(quantity);
  const totalSum = grades.reduce((result, value) => result + value, 0);
  alert(`A média das notas é ${calcMeanAsText(totalSum, quantity)}`);
}