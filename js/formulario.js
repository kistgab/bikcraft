const form = document.querySelector("form");
form.addEventListener("submit", enviarForm);

function enviarForm(event) {
  event.preventDefault();

  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerText = "Enviando...";

  const data = new FormData(form);

  fetch("./enviar.php", {
    method: "POST",
    body: data,
  }).then(tratarEnvioForm);
}

function tratarEnvioForm(response) {
  response.ok
    ? (form.innerHTML =
        "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #317A00';>Mensagem enviada</span> com sucesso, em breve entraremos em contato. Geralmente respondemos em até 24 horas.</p>")
    : (form.innerHTML =
        "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #E00000';>Erro no envio</span>, você pode enviar diretamente para o nosso email: contato@bikcraft.com <br>(Não implementado pela falta do servidor PHP)</p>");
}
