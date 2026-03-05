// 10 - Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.

import { collectNumericValue } from "../utils/prompt-manager.js";
import { showOnHtml } from "../utils/ui-manager.js";

export function startChallenge10() {
  const userTableNum = collectNumericValue("Digite um número de tabuada: ");

  showOnHtml(printHtmlMultTable(userTableNum));
}

function printHtmlMultTable(num) {
  let htmlContent = '<div class="table">';
  const padZero = (value) => value.toString().padStart(2,0);

  for (let i = 1; i <= num; i++) {
    htmlContent += "<div>";
    for (let j = 1; j <= 10; j++) {
      htmlContent += `${padZero(i)} * ${padZero(j)} = ${padZero(j * i)}<br>`;
    }
    htmlContent += "</div>";
  }

  htmlContent += "</div><br>";

  return htmlContent;
}
