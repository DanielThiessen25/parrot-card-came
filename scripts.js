let numeroCartas = 0;
while (numeroCartas != 4 && numeroCartas != 6 && numeroCartas != 8 && numeroCartas != 10 && numeroCartas != 12 && numeroCartas != 14) {
    numeroCartas = prompt("Quantas cartas?");
}

function adicionarCartas() {
    const elemento = document.querySelector(".tabuleiro");
    for (let contador = 0; contador < (numeroCartas) / 2; contador++) {
        elemento.innerHTML += 
        `<div class="seletor">
            <div class="carta">
                <div class="topo-carta"><img src="imgs/front.png"></div>
            </div>
            <div class="carta">
                <div class="topo-carta"><img src="imgs/front.png"></div>
            </div>
        </div>`;
    }

}

adicionarCartas();

