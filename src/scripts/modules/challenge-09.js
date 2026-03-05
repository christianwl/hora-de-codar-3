// 9 - Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100.

import { getTimerStatus } from "../utils/timer.js";

export function startChallenge09() {
  const min = 100;
  const max = min + 10;
  alert(
    getTimerStatus(max, { isRegressive: false, initialIndex: min + 1 }),
  );
}
