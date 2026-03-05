import {
  collectNumericValue,
  collectPositiveValue,
} from "../utils/prompt-manager.js";

/* 
1 - Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor 
que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, 
nem um valor negativo.  O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor.
*/

export function startChallenge01() {
  const [dividend, divisor] = collectDivisionTerms();

  let result = dividend / divisor;

  alert(
    `O resultado da divisão de ${dividend} pelo ${divisor} é ${result}`,
  );
}

function collectDivisionTerms() {
  let dividend = collectNumericValue("Digite o primeiro número ");
  let divisor = collectPositiveValue(
    "Digite o segundo número: \n\nOBS: Esse número deve ser maior que 0!",
    {
      optionalErrorText:
        "O número digitado não é maior que 0, tente novamente...",
    },
  );
  return [dividend, divisor];
}
