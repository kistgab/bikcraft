function ativarLinkPaginaAtual(link) {
  const paginaAtual = location.href;
  const linkURL = link.href;
  if (paginaAtual.includes(linkURL)) {
    link.classList.add("ativo");
  }
}

const links = document.querySelectorAll(".header-menu a");
links.forEach(ativarLinkPaginaAtual);

//ativar produtos selecionados
function marcarProdutoSelecionado(parametro) {
  const radioSelecionar = document.getElementById(parametro);
  radioSelecionar ? (radioSelecionar.checked = true) : null;
}
const urlParametros = new URLSearchParams(location.search);
urlParametros.forEach(marcarProdutoSelecionado);

//perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button");
perguntas.forEach((pergunta) => {
  pergunta.addEventListener("click", alternarVisibilidadePergunta);
});

function alternarVisibilidadePergunta(event) {
  const pergunta = event.currentTarget;
  const respostaId = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(respostaId);

  resposta.classList.toggle("ativa");

  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

//galeria de bicicletas
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

galeria.forEach((imagem) => {
  imagem.addEventListener("click", alternarImagem);
});

function alternarImagem(event) {
  const imagem = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  console.log(media);
  if (media) {
    galeriaContainer.prepend(imagem);
  }
}

//Animacao
if (window.SimpleAnime) {
  new SimpleAnime();
}
