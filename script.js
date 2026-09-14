/* ==================== VARIÁVEIS DO JOGO ==================== */

let sequencia = [];

let cores = ["R", "B", "Y", "G"];

let jogando = false;

let posicaoJogador = 0;

let pontuacao = 0;

let ultimaPontuacao = 0;


/* ==================== ELEMENTOS DO JOGO ==================== */

let textDisplay = document.getElementById("textDisplay");

let TextoPontuacao = document.getElementById("pontuacao");

let indicador = document.getElementById("indicador");

let botaoPlay = document.querySelector(".play");


/* ==================== ELEMENTOS DO RANKING ==================== */

let ranking = [];

let botaoRanking = document.getElementById("ranking");

let fecharRanking = document.getElementById("fecharRanking");

let fecharRegistroRanking = document.getElementById("fecharRegistroRanking");

let salvarRanking = document.getElementById("salvarRanking");


/* ==================== ELEMENTOS DO NOME ==================== */

let letra1 = document.getElementById("letra1");

let letra2 = document.getElementById("letra2");

let letra3 = document.getElementById("letra3");


/* ==================== EVENTOS DOS BOTÕES ==================== */

botaoPlay.addEventListener("click", iniciarJogo);

botaoRanking.addEventListener("click", abrirRanking);

fecharRanking.addEventListener("click", fecharRank);

fecharRegistroRanking.addEventListener("click", fecharRegistroRank);

salvarRanking.addEventListener("click", pegarNome);


/* ==================== SORTEIO DA SEQUÊNCIA ==================== */

function sortearCor() {
  let idNovaCor = Math.random() * 4;

  idNovaCor = Math.floor(idNovaCor);

  let novaCor = cores[idNovaCor];

  sequencia.push(novaCor);
}


/* ==================== VALIDAÇÃO DA JOGADA ==================== */

function validarAcerto(corClicada) {
  let corCerta = sequencia[posicaoJogador];

  if (jogando) {
    if (corClicada == corCerta) {
      posicaoJogador++;

      if (posicaoJogador == sequencia.length) {
        pontuacao += 1;
        animacaoAcerto();
      }
    } else {
      ultimaPontuacao = pontuacao;
      animacaoErro();
      posicaoJogador = 0;
      pontuacao = 0;
      jogando = false;
      abrirRegistroRanking();
    }
  }
}


/* ==================== EXIBIÇÃO DA SEQUÊNCIA ==================== */

function percorrerSequencia(i = 0) {
  textDisplay.innerHTML = "Observe a sequência...";
  textDisplay.style.fontSize = "3.5vmin";

  let btnRed = document.querySelector(".btnRed");
  let btnBlue = document.querySelector(".btnBlue");
  let btnYellow = document.querySelector(".btnYellow");
  let btnGreen = document.querySelector(".btnGreen");

  btnRed.style.cursor = "no-drop";
  btnBlue.style.cursor = "no-drop";
  btnYellow.style.cursor = "no-drop";
  btnGreen.style.cursor = "no-drop";

  btnRed.classList.add("btnRedActive");
  btnBlue.classList.add("btnBlueActive");
  btnYellow.classList.add("btnYellowActive");
  btnGreen.classList.add("btnGreenActive");

  if (i >= sequencia.length) {
    jogando = true;

    btnRed.classList.remove("btnRedActive");
    btnBlue.classList.remove("btnBlueActive");
    btnYellow.classList.remove("btnYellowActive");
    btnGreen.classList.remove("btnGreenActive");

    btnRed.style.cursor = "pointer";
    btnBlue.style.cursor = "pointer";
    btnYellow.style.cursor = "pointer";
    btnGreen.style.cursor = "pointer";

    textDisplay.style.fontSize = "5vmin";
    textDisplay.innerHTML = "Sua vez!";
    return;
  }

  if (sequencia[i] == "R") {
    indicador.style.backgroundColor = "red";
  } else if (sequencia[i] == "B") {
    indicador.style.backgroundColor = "blue";
  } else if (sequencia[i] == "Y") {
    indicador.style.backgroundColor = "yellow";
  } else if (sequencia[i] == "G") {
    indicador.style.backgroundColor = "rgb(0, 255, 0)";
  }

  setTimeout(() => {
    indicador.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

    setTimeout(() => {
      percorrerSequencia(i + 1);
    }, 200);
  }, 1000);
}


/* ==================== INICIAR JOGO ==================== */

function iniciarJogo() {
  TextoPontuacao.innerHTML = `Pontuação: ${pontuacao}`;

  sequencia = [];
  jogando = false;
  posicaoJogador = 0;
  pontuacao = 0;

  sortearCor();
  percorrerSequencia();
}


/* ==================== ANIMAÇÃO DE ACERTO ==================== */

function animacaoAcerto() {
  textDisplay.innerHTML = "Correto!";

  let iconeAcerto = document.getElementById("iconeAcerto");

  for (let i = 0; i <= 3; i++) {
    TextoPontuacao.innerHTML = `Pontuação: ${pontuacao}`;

    setTimeout(() => {
      iconeAcerto.style.display = "block";
      indicador.style.backgroundColor = "rgb(0, 255, 0)";
    }, i * 200);

    setTimeout(
      () => {
        iconeAcerto.style.display = "none";
        indicador.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

        if (i == 3) {
          sortearCor();
          posicaoJogador = 0;

          setTimeout(() => {
            percorrerSequencia();
          }, 500);
        }
      },
      i * 200 + 100,
    );
  }
}


/* ==================== ANIMAÇÃO DE ERRO ==================== */

function animacaoErro() {
  TextoPontuacao.innerHTML = `Pontuação: 0`;
  textDisplay.innerHTML = "Errado!";

  let iconeErro = document.getElementById("iconeErro");

  for (let i = 0; i <= 3; i++) {
    setTimeout(() => {
      iconeErro.style.display = "block";
      indicador.style.backgroundColor = "red";
    }, i * 200);

    setTimeout(
      () => {
        iconeErro.style.display = "none";
        indicador.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      },
      i * 200 + 100,
    );
  }
}


/* ==================== RANKING ==================== */

function abrirRanking() {
  let modalRank = document.getElementById("fundoRank");

  modalRank.style.display = "flex";

  ordenarRanking();

  atualizarRanking();
}

function fecharRank() {
  let modalRank = document.getElementById("fundoRank");

  modalRank.style.display = "none";
}

function ordenarRanking() {
  ranking = ranking.sort((a, b) => {
    if (a.pontuacao < b.pontuacao) {
      return 1;
    } else if (a.pontuacao == b.pontuacao) {
      return 0;
    } else {
      return -1;
    }
  });
}

function atualizarRanking() {
  let listaRanking = document.getElementById("listaRanking");

  listaRanking.innerHTML = "";

  for (let i = 0; i < ranking.length; i++) {
    listaRanking.innerHTML += `
      <div id="nomeRanking">
        <span>${i + 1}º</span>
        <span>${ranking[i].nome}</span>
        <span>${ranking[i].pontuacao}</span>
      </div>
    `;
  }
}


/* ==================== REGISTRO DA PONTUAÇÃO ==================== */

function abrirRegistroRanking() {
  let modalRank = document.getElementById("fundoRegistroRank");

  modalRank.style.display = "flex";
}

function fecharRegistroRank() {
  let modalRank = document.getElementById("fundoRegistroRank");

  modalRank.style.display = "none";
}

function pegarNome() {
  let valorLetra1 = letra1.value;

  let valorLetra2 = letra2.value;

  let valorLetra3 = letra3.value;

  if (!valorLetra1 || !valorLetra2 || !valorLetra3) {
    let aviso = document.getElementById("avisoNome");

    aviso.style.display = "block";
  } else {
    let nome = valorLetra1 + valorLetra2 + valorLetra3;

    ranking.push({
      nome: nome,
      pontuacao: ultimaPontuacao,
    });

    fecharRegistroRank();
  }
}


/* ==================== NAVEGAÇÃO ENTRE INPUTS ==================== */

letra1.addEventListener("input", () => {
  if (letra1.value) {
    letra2.focus();
  }
});

letra2.addEventListener("input", () => {
  if (letra2.value) {
    letra3.focus();
  }
});


/* ==================== VOLTAR COM BACKSPACE ==================== */

letra3.addEventListener("keydown", (e) => {
  if (e.key === "Backspace" && !letra3.value) {
    letra2.focus();
  }
});

letra2.addEventListener("keydown", (e) => {
  if (e.key === "Backspace" && !letra2.value) {
    letra1.focus();
  }
});


/* ==================== CONFIRMAR COM ENTER ==================== */

letra3.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    pegarNome();
  }
});