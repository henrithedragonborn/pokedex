const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoAlterarTema = document.querySelector(".imagem-botao");
botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    body.classList.toggle("modo-escuro");
    if (modoEscuroEstaAtivo) {
        imagemBotaoAlterarTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        imagemBotaoAlterarTema.setAttribute("src", "./src/imagens/moon.png");
    }
});
