/*
 5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e 
 todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.
*/

import { calcMeanAsText, countRange, sumRange } from "../utils/math-utils.js";
import { collectNumericValue } from "../utils/prompt-manager.js";

export function startChallenge05() {
  let numFirst = collectNumericValue("Digite um número: ");

  let numSecond = collectNumberOver(
    numFirst,
    "Digite um número: \n\nOBS: O número deve ser maior que o primeiro",
  );

  let sumValue = sumRange(numFirst, numSecond);
  let quantity = countRange(numFirst, numSecond);

  alert(
    `A média aritimetica da progressão entre ${numFirst} e ${numSecond} é ${calcMeanAsText(sumValue, quantity)}`,
  );
}

function collectNumberOver(minNum, promptText) {
  let num = 0;
  do {
    num = collectNumericValue(promptText);
    if (num <= minNum) {
      alert(
        "Valor digitado não está de acordo com o que foi pedido, tente novamente...",
      );
    }
  } while (num <= minNum);
  return num;
}
