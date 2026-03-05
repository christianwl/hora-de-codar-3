# Hora de Codar 3 - JavaScript

Este repositório contém uma coleção de **11 desafios de lógica** desenvolvidos originalmente em 2024 e modernizados em 2025 para aplicar conceitos avançados de organização e arquitetura de código.

## 📜 Sobre o Projeto
Os exercícios foram desenvolvidos durante o ano de **2024** como parte do programa **Proprofissão**, do **Instituto PROA**. Inicialmente, o foco foi o domínio da programação básica (estruturas de repetição, condicionais e variáveis).

Em **2025**, o projeto passou por uma refatoração estratégica para implementar:
* **Modularização (ES6 Modules):** Uso de `import` e `export` para organizar o código de forma profissional.
* **Pasta `utils`:** Centralização de arquivos com funções utilitárias para apresentação de dados, tratamento de erros e execução de logicas, evitando repetição de código
* **Validação de Dados:** Implementação de lógica para garantir que o programa receba apenas entradas válidas via `prompt`.
* **Uso de `type="module"`:** Otimização do HTML para carregar apenas o script principal, deixando o navegador gerenciar as dependências.

## 🛠️ Tecnologias Utilizadas
* **JavaScript (ES6+)**
* **HTML5**

## 📂 Estrutura de Arquivos
* `index.html`: Ponto de entrada que carrega o script principal.
* `/utils`: Pasta com Biblioteca de funções auxiliares
* `/modules/challenge-xx.js`: Arquivos individuais com a resolução dos 11 desafios.

## 📝 Lista de Desafios
1.  **Divisão Segura:** Impede divisão por zero ou negativos.
2.  **Bomba Relógio:** Contagem regressiva de 30 a 0 com mensagem final.
3.  **Contagem Decrescente:** Impressão de números de 10 a 1.
4.  **Média de Intervalo Fixo:** Cálculo da média entre os números 15 e 100.
5.  **Média Dinâmica:** Média entre dois números escolhidos pelo usuário.
6.  **Gestão de Notas:** Cálculo de média com sistema de loop para múltiplos alunos.
7.  **Validador de Notas:** Média de 6 notas com bloqueio de valores fora do intervalo 0-10.
8.  **Contador 1 a N:** Imprime sequência numérica até o limite informado.
9.  **Salto de 100:** Exibe os 10 primeiros números inteiros maiores que 100.
10. **Tabuadas de 1 a N:** Geração de múltiplas tabuadas baseadas na entrada do usuário.
11. **Filtro de Intervalo:** Identifica quantos números (entre 10 digitados) estão no intervalo [24, 42].

---

## 🚀 Como Rodar o Projeto Localmente

Devido ao uso de **Módulos JavaScript (`import/export`)**, o navegador bloqueia a execução se o arquivo for aberto diretamente pelo protocolo `file://` (clique duplo no arquivo).

Para rodar o projeto:
1. Certifique-se de ter o **VS Code** instalado.
2. Instale a extensão **Live Server**.
3. Abra a pasta do projeto no VS Code.
4. Clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"**.
5. O projeto será servido em um ambiente seguro (`http://127.0.0.1:5500`).

## Autor

<div>
  <a href="https://github.com/christianwl">
    <img src="https://contrib.rocks/image?repo=christianwl/hora-de-codar-3" alt="Autor do Portfolio"/>
  </a>
</div>