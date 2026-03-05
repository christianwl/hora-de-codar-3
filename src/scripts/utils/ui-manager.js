export function showOnHtml(conteudo) {
  const container = document.getElementById("app-container");
  container.insertAdjacentHTML("beforeend", `<section class="challenge-section">${conteudo}</section><hr>`);
}