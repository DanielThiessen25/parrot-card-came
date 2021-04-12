let numeroCartas = 0;
while (numeroCartas != 4 && numeroCartas != 6 && numeroCartas != 8 && numeroCartas != 10 && numeroCartas != 12 && numeroCartas != 14) {
    numeroCartas = prompt("Quantas cartas?");
}

let rodada = 0;
let contadorRodadas = 0;
let jogadas = 0;
var cartaschecagem = [];
var indiceschecagem = [];
const conteudoCartas = ["fiesta", "metal", "unicornio", "explody", "bobross", "revertit", "triplets"];
const baralho = [];

function formarBaralho() {
    for (let contador = 0; contador < (numeroCartas) / 2; contador++) {
        baralho.push(conteudoCartas[contador]);
        baralho.push(conteudoCartas[contador]);
    }
}

formarBaralho();

baralho.sort(embaralhar);

function embaralhar() {
    return Math.random() - 0.5;
}

function adicionarCartas() {
    const elemento = document.querySelector(".tabuleiro");
    for (let contador = 0; contador < (numeroCartas) / 2; contador++) {
        var link1 = "imgs/" + baralho[(2 * contador)] + ".gif";
        var link2 = "imgs/" + baralho[(2 * contador) + 1] + ".gif";

        elemento.innerHTML +=
            `<div class="seletor">
            <div class="carta" onclick="virar(${2 * contador})">
                <div class="front-face carta${2 * contador} face"><img src="imgs/front.png"></div>
                <div class="back-face carta${2 * contador} face"><img src=${link1}></div>
            </div>
            <div class="carta" onclick="virar(${2 * contador + 1})">
                <div class="front-face carta${2 * contador + 1} face"><img src="imgs/front.png"></div>
                <div class="back-face carta${2 * contador + 1} face"><img src=${link2}></div>
            </div>
        </div>`;
    }
}

function virar(numero) {
    const frente = document.querySelector(".front-face.carta" + numero);
    const tras = document.querySelector(".back-face.carta" + numero);
    const possuiClasse = frente.classList.contains("virar");
    if (possuiClasse == false) {
        frente.classList.add("virar");
        tras.classList.add("desvirar");
        rodada++;
        jogadas++;
        checagem(numero);
    }
}

function desvirar() {

    const frentenovo = document.querySelector(".back-face.carta" + parametros[0]);
    frentenovo.classList.add("virar");
    const trasnovo = document.querySelector(".front-face.carta" + parametros[0]);
    trasnovo.classList.add("desvirar");

    const frente = document.querySelector(".front-face.carta" + parametros[0]);
    frente.classList.remove("desvirar");
    frente.classList.remove("virar");
    const tras = document.querySelector(".back-face.carta" + parametros[0]);
    tras.classList.remove("virar");
    tras.classList.remove("desvirar");

    const frentenovo2 = document.querySelector(".back-face.carta" + parametros[1]);
    frentenovo2.classList.add("virar");
    const trasnovo2 = document.querySelector(".front-face.carta" + parametros[1]);
    trasnovo2.classList.add("desvirar");

    const frente2 = document.querySelector(".front-face.carta" + parametros[1]);
    frente2.classList.remove("virar");
    frente2.classList.remove("desvirar");
    const tras2 = document.querySelector(".back-face.carta" + parametros[1]);
    tras2.classList.remove("desvirar");
    tras2.classList.remove("virar");

}


var parametros = [];

function checagem(numero) {
    indiceschecagem.push(numero);
    cartaschecagem.push(baralho[numero]);
    if (rodada == 2) {
        if (cartaschecagem[0] == cartaschecagem[1]) {
            contadorRodadas++;
        }
        else {
            parametros[0] = indiceschecagem[0];
            parametros[1] = indiceschecagem[1];
            setTimeout(desvirar, 1000);
            setTimeout(desvirar, 1000);
        }
        cartaschecagem = [];
        indiceschecagem = [];
        rodada = 0;
    }

    if (contadorRodadas == (numeroCartas / 2)) {
        setTimeout(finalizar, 1000);
    }
}

function finalizar() {
    var mensagem = "FIM DE JOGO! VOCÊ GANHOU EM " + jogadas + " JOGADAS E EM UM TOTAL DE " + segundos + " SEGUNDOS!!";
    alert(mensagem);
    clearInterval(relogio);
    FIM = true;
}

adicionarCartas();

let FIM = false;
var segundos = 1;
const relogio = setInterval(temporizador, 1000);

function temporizador() {
    if (FIM == false) {
        const elemento = document.querySelector(".relogio");
        elemento.innerHTML = segundos;
        segundos++;
    }
}
