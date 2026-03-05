// 3 - Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.
// Exemplo: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

import { getTimerStatus } from "../utils/timer.js";
import { showOnHtml } from "../utils/ui-manager.js";

export function startChallenge03() {
  const maxIndex = 10;
  const initialIndex = 1;

  showOnHtml(getTimerStatus(maxIndex, { initialIndex }));
}
