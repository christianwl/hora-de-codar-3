import {
  receberString,
  receberValorNumerico,
  receberValorPositivo,
} from "../utils/functions.js";

// 1 - Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo.  O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor.

export function startChallenge1() {
  const valoresDivisao = {
    dividendo: receberValorNumerico("Digite o primeiro número "),
    divisor: receberValorPositivo(
      "Digite o segundo número: \n\nOBS: Esse número deve ser maior que 0!",
      {
        textoErroOpcional:
          "O número digitado não é maior que 0, tente novamente...",
      },
    ),
  };

  let resultado = retornarDivisaoSimples(valoresDivisao);

  apresentarNaTela(
    `O resultado da divisão de ${valoresDivisao.dividendo} pelo ${valoresDivisao.divisor} é ${resultado}`,
  );
}

function retornarDivisaoSimples({ dividendo, divisor }) {
  return dividendo / divisor;
}

//----------------------------------------------------------------------------------------------------------------------

// 2 - Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. Utilize "document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO".

export function startChallenge2() {
  let indice = 30;

  apresentarNoHtml(cronometrar(indice));
  apresentarNoHtml("EXPLOSÃO!!!");
}

function cronometrar(
  indiceMax,
  { ehRegressivo = true, indiceInicial = 0 } = {},
) {
  let indiceMin = indiceInicial;
  let cronometroCompleto = "";
  do {
    cronometroCompleto += (ehRegressivo ? indiceMax : indiceMin) + " ";
    ehRegressivo ? indiceMax-- : indiceMin++;
  } while (ehRegressivo ? indiceMax >= indiceMin : indiceMin <= indiceMax);

  return cronometroCompleto;
}

//----------------------------------------------------------------------------------------------------------------------

// 3 - Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.
// Exemplo: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

export function startChallenge3() {
  apresentarNoHtml(cronometrar(10, { indiceInicial: 1 }));
}

//----------------------------------------------------------------------------------------------------------------------

// 4 - Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).

export function startChallenge4() {
  let startValue = 15;
  let endValue = 100;

  let sumValue = sumRange(startValue, endValue);
  let quantity = countRange(startValue, endValue);

  apresentarNaTela(calcMean(sumValue, quantity));
}

function sumRange(start, end) {
  const quantity = countRange(start, end);
  return ((start + end) * quantity) / 2;
}

function countRange(start, end) {
  return Math.abs(start - end) + 1;
}

function calcMean(sum, quantity) {
  return (sum / quantity).toFixed(2);
}

// 5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.

export function startChallenge5() {
  let primeiroNumeroInteiro = parseInt(
    receberValorNumerico("Digite um número: "),
  );

  let segundoNumeroInteiro = 0;

  do {
    segundoNumeroInteiro = parseInt(
      receberValorNumerico(
        "Digite um número: \n\nOBS: O número deve ser maior que o primeiro",
      ),
    );

    if (segundoNumeroInteiro <= primeiroNumeroInteiro) {
      apresentarErro(
        "Valor digitado não está de acordo com o que foi pedido, tente novamente...",
      );
    }
  } while (segundoNumeroInteiro <= primeiroNumeroInteiro);

  let sumValue = sumRange(primeiroNumeroInteiro, segundoNumeroInteiro);
  let quantity = countRange(primeiroNumeroInteiro, segundoNumeroInteiro);

  apresentarNaTela(
    `A média aritimetica da progressão entre ${primeiroNumeroInteiro} e ${segundoNumeroInteiro} é ${calcMean(sumValue, quantity)}`,
  );
}

// 6 - Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.

export function startChallenge6() {
  let quantity = 2;
  let canContinue = "";
  let approvedCount = 0;
  do {
    let grades = collectStudentGrades(quantity);
    let totalSum = sumArray(grades);
    let result = calcMean(totalSum, grades.length);
    let mediaFinal = `A média final é ${result}`;

    if (result < 9.5) {
      apresentarNaTela(mediaFinal + ", você não foi aprovado!");
    } else {
      apresentarNaTela(mediaFinal + ", você foi aprovado!");
      approvedCount++;
    }

    canContinue = receberString("Calcular a média de outro aluno S/N?");
  } while (canContinue.toLowerCase() != "n");

  apresentarNaTela(`Total de alunos aprovados: ${approvedCount}`);
}

function collectStudentGrades(quantity, { minLimit = 0, maxLimit = 10 } = {}) {
  let grade = 0.0;
  let gradeList = [];
  for (let i = 1; i <= quantity; i++) {
    grade = receberValorPositivo(`Digite a º${i} nota:`, {
      podeSerZero: true,
      textoErroOpcional: `A nota deve estar entre ${minLimit} e ${maxLimit}`,
    });
    if (grade > maxLimit) {
      i--;
      apresentarErro(
        "A nota informada não está dentro do limite exigido, tente novamente...",
      );
    } else {
      gradeList.push(grade);
    }
  }
  return gradeList;
}

function sumArray(valuesArray = []) {
  return valuesArray.reduce((accumulator, current) => accumulator + current, 0);
}

// 7 - Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total.
// Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário.

export function startChallenge7() {
  let quantity = 6;
  let grades = collectStudentGrades(quantity);
  let totalSum = sumArray(grades);
  apresentarNaTela(`A média das notas é ${calcMean(totalSum, quantity)}`);
}

// 8 - Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO.
// N  é um valor informado pelo usuário

export function startChallenge8() {
  let n = parseInt(
    receberValorPositivo(
      "Digite um número inteiro, esse número deve ser maior que 0: ",
    ),
  );

  apresentarNaTela(printRange(n));
}

function printRange(max, min = 1) {
  let numbers = [];
  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }
  return numbers.join(" ");
}

// 9 - Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100.

export function startChallenge9() {
  let min = 100;
  let max = min + 10;
  apresentarNaTela(printRange(max, min + 1));
}

// 10 - Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.

export function startChallenge10() {
  let tabuada = parseInt(receberValorNumerico("Digite um número de tabuada: "));
  printHtmlMultTable(tabuada);
}

function printHtmlMultTable(num) {
  let htmlContent = '<div style="display: flex; gap: 20px; flex-wrap: wrap;">';

  for (let i = 1; i <= num; i++) {
    htmlContent += "<div>";
    for (let j = 1; j <= 10; j++) {
      htmlContent += `${i} * ${j} = ${i * j}<br>`;
    }
    htmlContent += "</div>";
  }

  htmlContent += "</div><br>";

  // Uma única chamada para "pintar" a tela
  apresentarNoHtml(htmlContent);
}

// 11 - Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.

export function startChallenge11() {
  let quantity = 10;

  alert("Digite 10 números");
  let numArray = collectUserNumbers(quantity);
  let start = 24;
  let end = 42;

  let countInside = getNumberCountInRange(numArray, start, end);
  let countOutside = numArray.length - countInside;
  let msgOutside = countOutside === 1 ? "está fora" : "estão fora";

  apresentarNaTela(
    `Dos valores digitados, ${countInside} estão entre ${start} e ${end} e ${countOutside} ${msgOutside} deles.`,
  );
}

function collectUserNumbers(quantity) {
  let numbers = [];
  for (let i = 1; i <= quantity; i++) {
    let num = receberValorNumerico(`Digite o º${i} número: `);
    numbers.push(num);
  }
  return numbers;
}

function getNumberCountInRange(numbers = [], start, end) {
  return numbers.filter((num) => num >= start && num <= end).length;
}

function apresentarNaTela(conteudo) {
  alert(conteudo);
  document.write(`${conteudo} <br><br>`);
}

function apresentarErro(conteudo) {
  alert(conteudo);
}

function apresentarNoHtml(conteudo) {
  document.write(`${conteudo}`);
}
