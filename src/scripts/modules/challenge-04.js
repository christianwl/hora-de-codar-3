// 4 - Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).

import { calcMeanAsText, countRange, sumRange } from "../utils/math-utils.js";

export function startChallenge04() {
  const startValue = 15;
  const endValue = 100;

  let sumValue = sumRange(startValue, endValue);
  let quantity = countRange(startValue, endValue);

  alert(calcMeanAsText(sumValue, quantity));
}