/* 
2 - Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva 
vá de 30 a 0. Utilize "document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO".
*/

import { showOnHtml } from "../utils/ui-manager.js";
import { getTimerStatus } from "../utils/timer.js";

export function startChallenge02() {
  let index = 30;

  showOnHtml(getTimerStatus(index) + " EXPLOSÃO!!!");
}
