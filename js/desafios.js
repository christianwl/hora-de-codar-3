import { receberValorNumerico, receberValorPositivo } from "./functions.js";

// 1 - Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo.  O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor. 

const valoresDivisao = {
    dividendo: receberValorNumerico("Digite o primeiro número "),
    divisor: receberValorPositivo("Digite o segundo número: \n\nOBS: Esse número deve ser maior que 1!", {textoErroOpcional: "O número digitado não é maior que 1, tente novamente..."})
}

function retornarDivisaoSimples({dividendo, divisor}){
    return dividendo / divisor;
}

var resultado = retornarDivisaoSimples(valoresDivisao);

ApresentarNaTela(`O resultado da divisão de ${valoresDivisao.dividendo} pelo ${valoresDivisao.divisor} é ${resultado}`)

var primeiroValor = Number(prompt("Digite um valor: "));

// 2 - Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. Utilize "document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO". 

var indice = 30;

function cronometrar(indiceMax, {regressivo = true, indiceInicial = 0} = {}){
    let indiceMin = indiceInicial;
    let cronometroCompleto = "";
    do{
        cronometroCompleto += (regressivo ? indiceMax : indiceMin) + " "; 
        regressivo ? indiceMax-- : indiceMin++;      
    } while (regressivo ? indiceMax >= indiceInicial : indiceMin <= indiceMax);

    return cronometroCompleto;
}

ApresentarNoHtml(cronometrar(indice));
ApresentarNoHtml("EXPLOSÃO!!!");


// 3 - Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.
// Exemplo: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

ApresentarNoHtml(cronometrar(10, {indiceInicial: 1}));

// 4 - Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).

var indiceMedia = 15;
var soma = 0;

while (indiceMedia >= 15 && indiceMedia <= 100) {
    soma += indiceMedia;
    indiceMedia++;
}

ApresentarNaTela((soma / 85).toFixed(2));

// 5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo. 

var primeiroNumeroInteiro = parseInt(prompt("Digite um número: "));

do {
    segundoNumeroInteiro = parseInt(prompt("Digite um número: \n\nOBS: O número deve ser maior que o primeiro"));
    if (segundoNumeroInteiro <= primeiroNumeroInteiro) {
        ApresentarErro("Valor digitado não está de acordo com o que foi pedido, tente novamente...");
    }
} while (segundoNumeroInteiro <= primeiroNumeroInteiro);

var progressao = segundoNumeroInteiro - primeiroNumeroInteiro;
var soma = 0;

for (var i = 0; i <= progressao; i++) {
    soma += primeiroNumeroInteiro + i;
}

ApresentarNaTela(`A média aritimetica da progressão entre ${primeiroNumeroInteiro} e ${segundoNumeroInteiro} é ${soma / (progressao + 1)}`);

// 6 - Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.

do {
    var nota1 = parseFloat(prompt("Digite a primeira nota: "));
    var nota2 = parseFloat(prompt("Digite a segunda nota: "));

    var resultado = (nota1 + nota2) / 2;
    var mediaFinal = 'A média final é ' + resultado.toFixed(2);
    if (resultado < 9.5) {
        ApresentarNaTela(mediaFinal + ', você não foi aprovado!')
    } else {
        ApresentarNaTela(mediaFinal + ', você foi aprovado!')
    }

    var continuando = prompt('Calcular a média de outro aluno S/N?');
} while (continuando.toLowerCase() != 'n')

// 7 - Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total.
// Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário. 

var indiceNota = 0;
var somaNotas = 0;
do {
    var notaAluno = Number(prompt(`Digite a º${indiceNota + 1} nota do aluno: \n\nOBS: O número deve ser entre 0 e 10`));
    if (notaAluno < 0 || notaAluno > 10) {
        ApresentarErro("Numero digito incorreto com o que foi solicitado, tente novamente...")
    }else{
        indiceNota++;
        somaNotas += notaAluno;
    }
} while(indiceNota < 6);

ApresentarNaTela(`A média das notas é ${somaNotas/6}`);

// 8 - Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO.
// N  é um valor informado pelo usuário

do {
    var n = parseInt(prompt("Digite um número inteiro, esse número deve ser maior que 0: "));
    if (n <= 0) {
        ApresentarErro("Numero digito incorreto com o que foi solicitado, tente novamente...")
    }
} while (n <= 0);

var textoNumero = '';
for (var i = 1; i <= n; i++) {
    textoNumero += i + ' ';  
}

ApresentarNaTela(textoNumero);

// 9 - Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100.

var numeros100 = '';
for(var i = 1; i <= 10; i++){
    numeros100 += (i + 100) + " ";
}
ApresentarNaTela(numeros100);

// 10 - Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário. 

var tabuada = parseInt(prompt("Digite um número de tabuada: "));

ApresentarNoHtml('<div style="display: flex; gap: 20px; flex-wrap: wrap;">');
for(var i = 1; i <= tabuada; i++){
    ApresentarNoHtml('<div>')
    for(var j = 1; j <= 10; j++){
        ApresentarNoHtml(`${i} * ${j} = ${i*j}<br>`);
    }
    ApresentarNoHtml('</div>')
}
ApresentarNoHtml('</div><br>');

// 11 - Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.

var somaValoresDentro = 0;
var somaValoresFora = 0;

alert("Digite 10 números")
for(var i = 0; i < 10; i++){
    var valorUsuario = Number(prompt(`Digite o º${i+1} número: `));
    if(valorUsuario >= 24 && valorUsuario <= 42){
        somaValoresDentro++;
    }else{
        somaValoresFora++;
    }
}

ApresentarNaTela(`Dos valores digitados, ${somaValoresDentro} estão entre 24 e 42 e ${somaValoresFora} está fora deles`);

function ApresentarNaTela(conteudo) {
    alert(conteudo);
    document.write(`${conteudo} <br><br>`);
}

function ApresentarErro(conteudo) {
    alert(conteudo);
}

function ApresentarNoHtml(conteudo){
    document.write(`${conteudo}`);
}
