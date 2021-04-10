let numeroCartas = 0;
while (numeroCartas != 4 && numeroCartas != 6 && numeroCartas != 8 && numeroCartas != 10 && numeroCartas != 12 && numeroCartas != 14) {
    numeroCartas = prompt("Quantas cartas?");
}


const conteudoCartas = ["fiesta", "metal", "unicornio", "explody", "bobross", "revertit", "triplets"];
const baralho = [];

function formarBaralho(){
    for(let contador = 0; contador < (numeroCartas)/2 ; contador++){
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
        var link1 = "imgs/"+baralho[(2*contador)] +".gif";
        var link2 = "imgs/"+baralho[(2*contador)+1] +".gif";
        
        
        elemento.innerHTML += 
        `<div class="seletor">
            <div class="carta" onclick="virar(${2*contador})">
                <div class="front-face carta${2*contador} face"><img src="imgs/front.png"></div>
                <div class="back-face carta${2*contador} face"><img src=${link1}></div>
            </div>
            <div class="carta" onclick="virar(${2*contador+1})">
                <div class="front-face carta${2*contador+1} face"><img src="imgs/front.png"></div>
                <div class="back-face carta${2*contador+1} face"><img src=${link2}></div>
            </div>
        </div>`;
    }
}

function virar(numero){
    const frente = document.querySelector(".front-face.carta"+numero);
    frente.classList.add("virar");
    const tras = document.querySelector(".back-face.carta"+numero);
    tras.classList.add("desvirar");
}



adicionarCartas();

