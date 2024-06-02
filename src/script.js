let numeroAleatorio = Math.floor(Math.random() *100) + 1;
let tentativas = 0;
let pontuacao = 100;
let palpitesAnteriores = [];

function jogoDeAdivinhacao() {
    const palpiteDigitado = pegarPalpiteDigitado();

    if (!palpiteDigitado) {
        alert("Digite um valor válido!")
        return;
    }
     if (palpiteDigitado < 1 || palpiteDigitado > 100) {
         alert("Hello, por favor digite um número entre 1 e 100!");
         return;
     }

     if (palpitesAnteriores.includes(palpiteDigitado)) {
         alert("Hello, você já tentou este palpite,por favor tente outro número!")
         return;
     }

     palpitesAnteriores = palpitesAnteriores.concat(palpiteDigitado);


    if (palpiteDigitado === numeroAleatorio) {
        alert("Hello, parabéns que jogada incrível você adivinhou!")
        reiniciarJogo();
        return;
    } else if(palpiteDigitado > numeroAleatorio) {
        tentativas++;
        atualizarFeedback("Hello, o número digitado é muito alto.Tente novamente!");
    } else if (palpiteDigitado < numeroAleatorio)  {
        tentativas++;
        atualizarFeedback(" Hello, o número ditado é muito baixo. Tente novamente!");
    }
    
    const novaPontuacao = 100 - (tentativas * 10);
    atualizarPontuacao(novaPontuacao);
    
    const palpitesFalhos = pegarPalpitesFalhos();
    const novosPalpitesFalhos = palpitesFalhos + " " + palpiteDigitado;
    atualizarPalpitesFalhos(novosPalpitesFalhos);

    const pontuacaoAtual = pegarPontuacao();
    if(pontuacaoAtual === "Hello, você tem 0 pontos") {
        alert("Perdeu! Você chegou a zero pontos.Tente novamente, boa sorte!");
        reiniciarJogo();
    }
   


}

function reiniciarJogo() {
    const vaiReiniciar = confirm("Deseja jogar novamente?");

    if(vaiReiniciar === true) {
        atualizarPalpitesFalhos("");
        atualizarPontuacao(100);
        atualizarFeedback("");
        limparPalpiteDigitado();

    }

}
