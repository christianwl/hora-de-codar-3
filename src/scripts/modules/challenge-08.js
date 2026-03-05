/*
 8 - Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). 
 Considere que o N será sempre maior que ZERO. N  é um valor informado pelo usuário
*/

import { collectPositiveValue } from "../utils/prompt-manager.js";
import { getTimerStatus } from "../utils/timer.js";

export function startChallenge08() {
  let n = collectPositiveValue("Digite um número inteiro: \n\nOBS: Esse número deve ser maior que 0!")

  alert(getTimerStatus(n, {isRegressive: false, initialIndex: 1}));
}