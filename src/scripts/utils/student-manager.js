import { collectPositiveValue } from "./prompt-manager.js";

/**
 * Prompts the user to collect a specific number of student grades within a defined range.
 * * @param {number} quantity - The number of grades to be collected. 
 * @param {Object} [options] - Configuration for grade limits. 
 * @param {number} [options.minLimit=0] - The minimum acceptable grade value. 
 * @param {number} [options.maxLimit=10] - The maximum acceptable grade value.
 * @returns {number[]} An array containing the collected and validated grades.
 */
export function collectStudentGrades(quantity, { minLimit = 0, maxLimit = 10 } = {}) {
  let grade = 0.0;
  let gradeList = [];

  do {
    grade = collectPositiveValue(`Digite a º${gradeList.length + 1} nota:`, {
      podeSerZero: true,
      textoErroOpcional: `A nota deve estar entre ${minLimit} e ${maxLimit}`,
    });

    if (grade > maxLimit) {
      alert(
        "A nota informada não está dentro do limite exigido, tente novamente...",
      );
      continue;
    }
    gradeList.push(grade);
  } while (gradeList.length < quantity);

  return gradeList;
}