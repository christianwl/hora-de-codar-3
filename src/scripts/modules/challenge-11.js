/* 
11 - Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos 
estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.
*/

import { collectNumericValue } from "../utils/prompt-manager.js";

export function startChallenge11() {
  const quantity = 10;

  alert("Digite 10 números");
  const numArray = collectUserNumbers(quantity);
  const start = 24;
  const end = 42;

  let countInside = getNumberCountInRange(numArray, start, end);
  let countOutside = numArray.length - countInside;
  let msgOutside = countOutside === 1 ? "está fora" : "estão fora";

  alert(
    `Dos valores digitados, ${countInside} estão entre ${start} e ${end} e ${countOutside} ${msgOutside} deles.`,
  );
}

function collectUserNumbers(quantity) {
  let numbers = [];
  for (let i = 1; i <= quantity; i++) {
    let num = collectNumericValue(`Digite o º${i} número: `);
    numbers.push(num);
  }
  return numbers;
}

function getNumberCountInRange(numbers = [], start, end) {
  return numbers.filter((num) => num >= start && num <= end).length;
}
